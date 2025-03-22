"use client"
import { useState } from "react";
import SlotBox from "../../UI/SlotBox/SlotBox";
import styles from "./BookingBox.module.css"
import Image from "next/image";
const BookingBox = () => {
    const [activeMode, setActiveMode] = useState("video");
    // const []
    return (
        <main className={styles.container}>

            {/* schedue appointment */}
            <section className={styles.scheduleAppointment}>
                {/* heading with button */}
                <div className={styles.scheduleHead}>
                    <span>Schedule Appointment</span>
                    <button>
                        Book Appointment
                    </button>
                </div>

                {/* mode buttons */}
                <section className={styles.mode}>
                    <button className={activeMode === "video" ? styles.activeVideoBtn : styles.videoBtn}
                        onClick={() => setActiveMode("video")}>Book Video Consult</button>
                    <button className={activeMode === "visit" ? styles.activeVisitBtn : styles.visitBtn}
                        onClick={() => setActiveMode("visit")}>Book Hospital Visit</button>
                </section>

                {/* location drop down */}
                <section className={styles.locationDrop}>
                    <select name="location" id="location">
                        <option value="MedicareHeart Institute, Okhla Road">
                            MedicareHeart Institute, Okhla Road
                        </option>
                        <option value="default">
                            default
                        </option>
                    </select>
                </section>
            </section>

            {/* month */}
            <section className={styles.month}>
                <Image src={"/left-arrow-circle.svg"} alt={"previous month arrow"} width={25} height={23} />
                <span>December</span>
                <Image src={"/right-arrow-circle.svg"} alt={"next month arrow"} width={25} height={23} />
            </section>

            {/* days */}

            {/* morning */}
            <SlotBox shift='Morning' />

            {/* Afternoon */}
            <SlotBox shift='Afternoon' />

            {/* Next Button */}
            <button className={styles.nextBtn}>
                Next
            </button>
        </main>
    );
}

export default BookingBox;