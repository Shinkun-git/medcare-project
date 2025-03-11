import Link from "next/link";
import styles from "./NavButtons.module.css"

import { Montserrat } from "next/font/google";

const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
});

export default function NavButtons(){
    return (
        <section className={`${styles.container} ${MontserratFont.className}`}>
            <Link href={"/login"}>
            <button className={styles.loginButton}>Login</button>
            </Link>
            <Link href={"/sign-up"}>
            <button className={styles.registerButton}>Register</button>
            </Link>
        </section>

    )
}