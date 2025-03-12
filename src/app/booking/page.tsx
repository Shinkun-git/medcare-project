import Footer from "../components/layouts/Footer/Footer";
import Navbar from "../components/layouts/Navbar/Navbar"
import styles from "./page.module.css"

const BookingPage = () => {
    return (
        <>
            <Navbar />
            <main id={styles.container}>
                <section className={styles.section1}>
                    <article className={styles.title}>
                        <section className={styles.titleHead}>
                            Book Your Next Doctor Visit in Seconds.
                        </section>

                        <section className={styles.titleContent}>
                            CareMate helps you find the best healthcare provider by
                            specialty, location, and more, ensuring you
                            get the care you need.
                        </section>
                    </article>
                </section>
                <section className={styles.section2}>
                    section 2
                </section>
            </main>
            <Footer />
        </>
    );
}

export default BookingPage;