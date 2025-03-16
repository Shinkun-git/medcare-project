import Footer from "../components/layouts/Footer/Footer";
import Navbar from "../components/layouts/Navbar/Navbar";
import styles from "./page.module.css"
import { Montserrat } from "next/font/google"
import SearchDoctor from "../components/UI/SearchDoctor/SearchDoctor";
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})
const appointmentPage = () => {
    return (
        <>
            <Navbar />
            {/* <main className={styles.container}>
                <section className={`${styles.searchField} ${MontserratFont.className}`}>
                    <span>
                        Find a doctor at your own ease
                    </span>
                    <SearchDoctor/>
                </section>
            </main> */}
            <Footer />
        </>
    );
}

export default appointmentPage;