"use client"
import { useEffect } from "react";
import BookingBox from "../components/layouts/BookingBox/BookingBox";
import Footer from "../components/layouts/Footer/Footer";
import styles from "./page.module.css"
import Image from "next/image";
const BookingPage = () => {
    useEffect(() => {
            document.body.style.overflow = "auto";
    
            return () => {
                document.body.style.overflow = "hidden";
            };
        }, []);
    return (
        <>
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
                    {/* <div id={styles.bgImgWrapper}>
                        <Image src={"/bookBG-crop.png"} alt={"doctor examining patient"}
                            fill style={{ objectFit: "cover" }} />
                    </div> */}
                    {/* <div className={styles.bookBox}> */}
                        <BookingBox />
                    {/* </div> */}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default BookingPage;