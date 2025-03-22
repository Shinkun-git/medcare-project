import Image from "next/image";
import Footer from "../components/layouts/Footer/Footer";
import styles from "./page.module.css"
import { Montserrat } from "next/font/google"
import DoctorCard from "../components/layouts/DoctorCard/DoctorCard";
import FilterSection from "../components/UI/FilterSection/FilterSection";
import PagesFrame from "../components/UI/PagesFrame/PagesFrame";
import doctorData from "../../../public/doctorData/doctorData.json"
import SearchDoctor from "../components/UI/SearchDoctor/SearchDoctor";
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})
const appointmentPage = () => {

    return (
        <>
            <main className={styles.container}>
                {/* search field */}
                <section className={`${styles.searchField} ${MontserratFont.className}`}>
                    <span>
                        Find a doctor at your own ease
                    </span>
                    <SearchDoctor/>
                </section>

                {/* donate section */}
                <section className={styles.donateSection}>
                    {/* donate title */}
                    <section className={styles.donateTitle}>
                        <span>6 doctors available</span>
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
                                    options={["Show ALL" ,"15+ years", "10-15 years", "5-10 years", "3-5 years", "1-3 years", "0-1 years"]} />
                                <FilterSection title="Gender" radioName="gender"
                                    options={["Show All", "Male", "Female"]} />
                            </aside>
                        </div>

                        {/* doctor's content */}
                        <section id={styles.doctorsContent}>
                            {doctorData.map((doc)=>(
                                <DoctorCard key={doc.name} name={doc.name} specialty={doc.specialty} 
                                experience={doc.experience} ratings={doc.ratings} image={doc.image}/>
                            ))}
                        </section>
                    </section>
                    {/* donate content */}

                    {/* donate footer */}
                    <section className={styles.donateFooter}>
                        <div className={styles.pagination}>
                            <section className={styles.pageArrow}>
                                <div>
                                    <Image src={"/left-arrow.svg"} alt={"previous page"} width={8} height={16} />
                                </div>
                                <span>
                                    Prev
                                </span>
                            </section>

                            <PagesFrame pages={["1", "2", "3", "4", "...", "22", "23", "24"]} />

                            <section className={styles.pageArrow}>
                                <span>
                                    Next
                                </span>
                                <div>
                                    <Image src={"/right-arrow.svg"} alt={"next page"} width={8} height={16} />
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default appointmentPage;