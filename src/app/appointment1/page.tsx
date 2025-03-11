import Image from "next/image";
import Footer from "../components/layouts/Footer/Footer";
import Navbar from "../components/layouts/Navbar/Navbar";
import styles from "./page.module.css"
import { Montserrat } from "next/font/google"
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})
const appointmentPage = () => {
    return (
        <>
            <Navbar />
            <main className={styles.container}>
                {/* search field */}
                <section className={`${styles.searchField} ${MontserratFont.className}`}>
                    <span>
                        Find a doctor at your own ease
                    </span>
                    <section className={styles.searchDetails}>
                        <div className={styles.frame1}>
                            <div className={styles.frame2}>
                                <div>
                                    <div className={styles.vectorFrame}>
                                        <label htmlFor="search">
                                            <Image src="/search-vector.svg" alt="search" width={20} height={20} />
                                        </label>
                                    </div>
                                    <input className={`${MontserratFont.className}`} type="text" name="search" id="search" placeholder="Search doctors" />
                                </div>
                            </div>
                        </div>
                        <button className={`${styles.searchBtn} ${MontserratFont.className}`}>
                            <span>
                                Search
                            </span>
                        </button>
                    </section>
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
                        <aside>
                            <section>
                                <div className={styles.asideTop}>
                                    <span>Filter By:</span>
                                    <button>Reset</button>
                                </div>
                            </section>
                            <section className={styles.asideContent}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </section>
                        </aside>
                        <section className={styles.doctorsContent}>
                            <div>
                                
                            </div>
                            <div>

                            </div>
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

                            <section></section>

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