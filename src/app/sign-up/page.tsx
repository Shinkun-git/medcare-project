import Image from "next/image";
import Navbar from "../components/layouts/Navbar/Navbar";

import styles from "./page.module.css"
import { Montserrat } from "next/font/google";
import Link from "next/link";
import SearchDBTN from "../components/UI/SearchDBTN/SearchDBTN";
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})
const SignUpPage = () => {
    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <Image src="/sign-up-bg.png" alt="a doctor's desk"
                    width={2493.21} height={911}
                    style={{ objectFit: "cover", }}
                    className={styles.bgImage} />
                <section className={`${styles.searchField} ${MontserratFont.className}`}>
                    <span className={styles.head}>
                        Sign Up
                    </span>
                    <div className={styles.searchDetails}>
                        <span>Already a member? <Link href="/login">Login.</Link> </span>
                    </div>
                    <section className={styles.searchDetails2}>
                        {/* name section */}
                        <label htmlFor="name">
                            <section className={styles.outerFrame}>
                                Name
                                <div className={styles.innerFrame}>
                                    <div className={styles.mainFrame}>
                                        <section>
                                            <Image src="/name-vector.png" alt="name vector" width={15} height={15}
                                                style={{ left: `${3}px`, top: `${3}px`, position: "relative" }} />
                                        </section>
                                        <input className={styles.input} type="text" name="name" id="name"
                                            placeholder="Enter your name" autoComplete="off" />
                                    </div>
                                </div>
                            </section>
                        </label>
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
                                        <input className={styles.input} type="email" name="email" id="email"
                                            placeholder="Enter your email address" autoComplete="off" />
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
                                        <input className={styles.input} type="password" name="password" id="passwd"
                                            placeholder="••••••••••" autoComplete="off" />
                                    </div>
                                </div>
                            </section>
                        </label>
                        <SearchDBTN text="Submit" bgColor="#1C4A2A" />
                        <SearchDBTN text="Reset" bgColor="#C6B09A" />
                    </section>
                </section>
            </main>
        </>
    );
}

export default SignUpPage;