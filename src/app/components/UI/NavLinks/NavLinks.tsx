"use client";
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.css";

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <section className={styles.container}>
            <Link href="/" className={pathname === "/" ? styles.currentPageLink : styles.defaultLink}>
                Home
            </Link>
            <Link href="/appointment1" className={pathname === "/appointment1" ? styles.currentPageLink : styles.defaultLink}>
                Appointments
            </Link>
            <Link href="/Blog" className={pathname === "/Blog" ? styles.currentPageLink : styles.defaultLink}>
                Health Blog
            </Link>
            <Link href="/Reviews" className={pathname === "/Reviews" ? styles.currentPageLink : styles.defaultLink}>
                Reviews
            </Link>
        </section>
    );
}
