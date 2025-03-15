import Image from "next/image";
import Navbar from "../components/layouts/Navbar/Navbar";

import styles from "./page.module.css"
import Link from "next/link";
import SearchDBTN from "../components/UI/SearchDBTN/SearchDBTN";
import InputField from "../components/UI/InputField/InputField";
import { Montserrat } from "next/font/google";
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
                        <InputField inputLabel={"Name"} vectorURL={"/name-vector.png"} placeholder={"Enter your name"}/>
                        {/* email section */}
                        <InputField inputLabel={"Email"} vectorURL={"/email-vector.png"} placeholder={"Enter your email address"}/>
                        {/* password section */}
                        <InputField inputLabel={"Password"} vectorURL={"/passwd-vector.png"} placeholder={"••••••••••"}/>

                        <SearchDBTN text="Submit" bgColor="#1C4A2A" />
                        <SearchDBTN text="Reset" bgColor="#C6B09A" />
                    </section>
                </section>
            </main>
        </>
    );
}

export default SignUpPage;