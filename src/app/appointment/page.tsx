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
                                    <input className={`${MontserratFont.className}`} type="text" name="search" id="search" placeholder="Search doctors"/>
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
            </main>
            <Footer />
        </>
    );
}

export default appointmentPage;