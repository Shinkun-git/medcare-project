import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import Navbar from "../components/layouts/Navbar/Navbar";
import SearchDBTN from "../components/UI/SearchDBTN/SearchDBTN";
import { Montserrat } from "next/font/google";
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})

const page = () => {
    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <Image src="/sign-up-bg.png" alt="a doctor's desk"
                    width={2493.2138671875} height={911}
                    style={{ objectFit: "cover" }}
                    className={styles.bgImage} />
                <section className={`${styles.searchField} ${MontserratFont.className}`}>
                    <span className={styles.head}>
                        Login
                    </span>
                    <div className={styles.searchDetails}>
                        <span>Are you a new member? <Link href="/sign-up">Sign up here.</Link> </span>
                    </div>
                    <section className={styles.searchDetails2}>
                        {/* email section */}
                        <label htmlFor="email">
                            <section className={styles.outerFrame}>
                                Email
                                <div className={styles.innerFrame}>
                                    <div className={styles.mainFrame}>
                                        <section>
                                            <Image src="/email-vector.png" alt="email vector" width={15} height={15}
                                                style={{ left: `${3}px`, top: `${3}px`, position: "relative" }} />
                                        </section>
                                        <input className={styles.input} type="email" name="email" id="email" placeholder="Enter your email address" />
                                    </div>
                                </div>
                            </section>
                        </label>
                        {/* password section */}
                        <label htmlFor="passwd">
                            <section className={styles.outerFrame} style={{ paddingBottom: `${10}px` }}>
                                Password
                                <div className={styles.innerFrame}>
                                    <div className={styles.mainFrame}>
                                        <section>
                                            <Image src="/passwd-vector.png" alt="passwd vector" width={15} height={15}
                                                style={{ left: `${3}px`, top: `${3}px`, position: "relative" }} />
                                        </section>
                                        <input className={styles.input} type="password" name="password" id="passwd" placeholder="••••••••••" />
                                    </div>
                                </div>
                            </section>
                        </label>
                        <SearchDBTN text="Login" bgColor="#1C4A2A" />
                        <SearchDBTN text="Reset" bgColor="#C6B09A" />
                        <div className={`${styles.forgot} ${MontserratFont.className}`}>
                            <a href="">Forgot Password ?</a>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default page;