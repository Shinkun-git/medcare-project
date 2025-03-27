"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import Footer from "../components/layouts/Footer/Footer";
import styles from "./page.module.css";
import { Montserrat } from "next/font/google";
import DoctorCard from "../components/layouts/DoctorCard/DoctorCard";
import FilterSection from "../components/UI/FilterSection/FilterSection";
import PagesFrame from "../components/UI/PagesFrame/PagesFrame";
import doctorData from "../../../public/doctorData/doctorData.json";
import SearchDoctor from "../components/UI/SearchDoctor/SearchDoctor";
import Link from "next/link";

const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
});

type Doctor = {
    doc_id: number;
    name: string;
    gender: string;
    specification: string;
    experience: number;
    description: string;
    location: string;
    rating: number;
    degree: string;
};

const appointmentPage = () => {
    const { isAuthenticated, loading } = useAuth(); // ✅ Using loading from useAuth()
    const router = useRouter();

    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [totalDoctors, setTotalDoctors] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ rating: "Show All", experience: null, gender: "Show All" });
    const [searchValue, setSearchValue] = useState("");

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
        }
    }, [isAuthenticated, loading, router]);

    // Prevent rendering until authentication check is complete
    if (loading || (!loading && !isAuthenticated)) {
        return null; // Prevents the brief page flash before redirect
    }
    const onSearch = (searchValue: string) => {
        setSearchValue(searchValue);
    };

    const updateFilter = (key: string, value: string) => {
        let newValue: string | null = value;
        if (key === "experience" && value === "Show All") newValue = null;

        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: newValue,
        }));
        setCurrentPage(1);
    };

    const fetchFilteredDoctors = async () => {
        if (loading || !isAuthenticated) return; // ✅ Ensure request runs only after auth check

        const queryParams = new URLSearchParams({
            page: currentPage.toString(),
            limit: "6",
        });

        if (filters.rating !== null) queryParams.append("rating", String(filters.rating));
        if (filters.experience !== null) queryParams.append("experience", String(filters.experience));
        if (filters.gender !== null) queryParams.append("gender", filters.gender);

        const response = await fetch(`http://localhost:3003/api/v1/doctors?${queryParams}`, {
            credentials: "include",
        });
        const parsedRes = await response.json();

        setDoctors(parsedRes.data.data);
        setTotalDoctors(parsedRes.data.total);
        setTotalPages(parsedRes.data.pages);
    };

    const fetchSearchedDoctors = async () => {
        if (loading || !isAuthenticated) return; // ✅ Prevent unnecessary requests

        const queryParams = new URLSearchParams({
            page: currentPage.toString(),
            limit: "6",
            searchQuery: searchValue,
        });

        try {
            const response = await fetch(`http://localhost:3003/api/v1/doctors/searchDoctor?${queryParams}`, {
                credentials: "include",
            });
            const parsedRes = await response.json();

            setDoctors(parsedRes.data.data);
            setTotalDoctors(parsedRes.data.total);
            setTotalPages(parsedRes.data.pages);
        } catch (error) {
            console.error("Error fetching searched doctors:", error);
        }
    };

    useEffect(() => {
        if (loading || !isAuthenticated) return;

        if (searchValue.trim() === "") {
            fetchFilteredDoctors();
        } else {
            fetchSearchedDoctors();
        }
    }, [currentPage, filters, searchValue, loading, isAuthenticated]);

    useEffect(() => {
        if (loading || !isAuthenticated) return;
        if (searchValue.trim() !== "") setCurrentPage(1);
    }, [searchValue]);

    // Show loading until authentication check is complete
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <main className={styles.container}>
                <section className={`${styles.searchField} ${MontserratFont.className}`}>
                    <span>Find a doctor at your own ease</span>
                    <SearchDoctor onSearch={onSearch} />
                </section>

                <section className={styles.donateSection}>
                    <section className={styles.donateTitle}>
                        <span>{totalDoctors} doctors available</span>
                        <div>Book appointments with minimum wait-time & verified doctor details</div>
                    </section>

                    <section className={styles.donateContent}>
                        <div id={styles.donateAside}>
                            <div id={styles.donateAsideTop}>
                                <span>Filter By:</span>
                                <button onClick={() => {
                                    setFilters({ rating: "Show All", experience: null, gender: "Show All" });
                                    setCurrentPage(1);
                                }}>Reset</button>
                            </div>

                            <aside>
                                <FilterSection
                                    title="Rating"
                                    radioName="rating"
                                    options={["Show All", "1 star", "2 star", "3 star", "4 star", "5 star"]}
                                    selectedValue={filters.rating !== null ? `${filters.rating}` : "Show All"}
                                    onFilterChange={(value) => updateFilter("rating", value)}
                                />

                                <FilterSection
                                    title="Experience"
                                    radioName="experience"
                                    options={["15+ years", "10-15 years", "5-10 years", "3-5 years", "1-3 years", "0-1 years"]}
                                    selectedValue={filters.experience || "Show All"}
                                    onFilterChange={(value) => updateFilter("experience", value)}
                                />

                                <FilterSection
                                    title="Gender"
                                    radioName="gender"
                                    options={["Show All", "Male", "Female"]}
                                    selectedValue={filters.gender !== null ? filters.gender : "Show All"}
                                    onFilterChange={(value) => updateFilter("gender", value)}
                                />
                            </aside>
                        </div>

                        <section id={styles.doctorsContent}>
                            {Array.isArray(doctors) && doctors.length > 0 ? (
                                doctors.map((doc) => (
                                        <DoctorCard
                                        key={doc.doc_id}
                                            id={doc.doc_id}  // ✅ Pass doctor ID
                                            name={doc.name}
                                            specialty={doc.specification}
                                            experience={doc.experience}
                                            rating={doc.rating}
                                            image={doctorData[0].image}
                                        />
                                ))
                            ) : (
                                <p>No doctors found</p>
                            )}
                        </section>
                    </section>

                    <section className={styles.donateFooter}>
                        <PagesFrame
                            pages={Array.from({ length: totalPages }, (_, index) => (index + 1).toString())}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default appointmentPage;
