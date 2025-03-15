import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import Navbar from "../components/layouts/Navbar/Navbar";
import SearchDBTN from "../components/UI/SearchDBTN/SearchDBTN";
import { Montserrat } from "next/font/google";
import InputField from "../components/UI/InputField/InputField";
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
                        <InputField inputLabel={"Email"} vectorURL={"/email-vector.png"} placeholder={"Enter your email"}/>
                        {/* password section */}
                        <InputField inputLabel={"Password"} vectorURL={"/passwd-vector.png"} placeholder={"••••••••••"}/>
                        
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