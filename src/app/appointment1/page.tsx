"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/layouts/Footer/Footer";
import styles from "./page.module.css"
import { Montserrat } from "next/font/google"
import DoctorCard from "../components/layouts/DoctorCard/DoctorCard";
import FilterSection from "../components/UI/FilterSection/FilterSection";
import PagesFrame from "../components/UI/PagesFrame/PagesFrame";
import doctorData from "../../../public/doctorData/doctorData.json"
const imageUrl = doctorData[0].image;
import SearchDoctor from "../components/UI/SearchDoctor/SearchDoctor";
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})
type doctor = {
    doc_id: number,
    name: string,
    gender: string,
    specification: string,
    experience: number,
    description: string,
    location: string,
    rating: number,
    degree: string
}
const appointmentPage = () => {

    const [doctors, setDoctors] = useState<doctor[]>([]);
    const [totalDoctors, setTotalDoctors] = useState(0); // Total number of doctors
    const [totalPages, setTotalPages] = useState(1); // Total pages based on filtered results
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ rating: "", experience: "", gender: "" }); // Store selected filters


    useEffect(() => {
        const fetchFilteredDoctors = async () => {
            const queryParams = new URLSearchParams({
                page: currentPage.toString(),
                limit: "6", // Show 6 doctors per page
                ...filters, // Include filters dynamically
            }).toString();

            const response = await fetch(`http://localhost:3003/api/v1/doctors?${queryParams}`);
            const parsedRes = await response.json();
            console.log("API Response:", parsedRes.data);
            setDoctors(parsedRes.data.data);
            setTotalDoctors(parsedRes.data.total);
            setTotalPages(parsedRes.data.pages);
        };
        fetchFilteredDoctors();
    }, [currentPage, filters]);

    return (
        <>
            <main className={styles.container}>
                {/* search field */}
                <section className={`${styles.searchField} ${MontserratFont.className}`}>
                    <span>
                        Find a doctor at your own ease
                    </span>
                    <SearchDoctor />
                </section>

                {/* donate section */}
                <section className={styles.donateSection}>
                    {/* donate title */}
                    <section className={styles.donateTitle}>
                        <span>{totalDoctors} doctors available</span>
                        <div>
                            Book appointments with minimum wait-time & verified doctor details
                        </div>
                    </section>
                    <section className={styles.donateContent}>
                        {/* aside content */}
                        <div id={styles.donateAside}>
                            <div id={styles.donateAsideTop}>
                                <span>Filter By:</span>
                                <button>Reset</button>
                            </div>

                            <aside>
                                <FilterSection title="Rating" radioName="rating"
                                    options={["Show All", "1 star", "2 star", "3 star", "4 star", "5 star"]} />
                                <FilterSection title="Experience" radioName="experience"
                                    options={["15+ years", "10-15 years", "5-10 years", "3-5 years", "1-3 years", "0-1 years"]} />
                                <FilterSection title="Gender" radioName="gender"
                                    options={["Show All", "Male", "Female"]} />
                            </aside>
                        </div>

                        {/* doctor's content */}
                        <section id={styles.doctorsContent}>
                            {Array.isArray(doctors) && doctors.length > 0 ? (
                                doctors.map((doc) => (
                                    <DoctorCard key={doc.doc_id} name={doc.name} specialty={doc.specification}
                                        experience={doc.experience} rating={doc.rating} image={imageUrl} />
                                ))
                            ) : (
                                <p>No doctors found</p>
                            )}
                        </section>
                    </section>
                    {/* donate content */}

                    {/* donate footer */}
                    <section className={styles.donateFooter}>

                        <PagesFrame pages={Array.from({ length: totalPages }, (_, index) => (index + 1).toString())}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage} />

                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default appointmentPage;