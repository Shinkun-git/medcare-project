import Footer from "../components/layouts/Footer/Footer";
import Navbar from "../components/layouts/Navbar/Navbar"
import styles from "./page.module.css"
import Image from "next/image";
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
                    <div id={styles.bgImgWrapper}>
                    <Image src={"/bookBG.png"} alt={"doctor examining patient"} 
                    width={1319.16} height={911} style={{objectFit:"cover"}}/>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default BookingPage;