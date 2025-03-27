"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Fix import for App Router
import SlotBox from "../../UI/SlotBox/SlotBox";
import styles from "./BookingBox.module.css";
import { ParamValue } from "next/dist/server/request/params";
import { useAuth } from "@/app/context/authContext";
import Calendar from "@/app/components/UI/Calendar/Calendar";

const BookingBox = ({ doctorId }: { doctorId: ParamValue }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [doctor, setDoctor] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [mode, setmode] = useState("video");
    const [location, setlocation] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState(new Date());   //before sending convert to sql DATE format
    // const []

    // Redirect if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, router]);

    // Fetch doctor data
    useEffect(() => {
        const fetchDoctor = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:3003/api/v1/doctors/searchDoctor/${doctorId}`,{
                credentials: "include",
            })
            const doctorData = await response.json();
            if (doctorData.data) {
                setDoctor(doctorData.data);
                setlocation(doctorData.data.location); // Set default location
            }
            setLoading(false);
        };
        fetchDoctor();
    }, [doctorId]);

    if (loading) return <p>Loading doctor details...</p>;
    if (!doctor) return <p>Doctor not found</p>;

    return (
        <main className={styles.container}>
            {/* Schedule Appointment */}
            <section className={styles.scheduleAppointment}>
                <div className={styles.scheduleHead}>
                    <span>Schedule Appointment with Dr.{doctor.name}</span>
                    <button>Book Appointment</button>
                </div>

                {/* mode Selection */}
                <section className={styles.mode}>
                    <button 
                        className={mode === "video" ? styles.activeVideoBtn : styles.videoBtn}
                        onClick={() => setmode("video")}
                    >
                        Book Video Consult
                    </button>
                    <button 
                        className={mode === "visit" ? styles.activeVisitBtn : styles.visitBtn}
                        onClick={() => setmode("visit")}
                    >
                        Book Hospital Visit
                    </button>
                </section>

                {/* Location Dropdown */}
                <section className={styles.locationDrop}>
                    <select 
                        name="location" 
                        id="location" 
                        value={location} 
                        onChange={(e) => setlocation(e.target.value)}
                    >
                        <option value={doctor.location}>{doctor.location}</option>
                    </select>
                </section>
            </section>

            {/* Month Navigation */}
            {/* <section className={styles.month}>
                <Image src={"/left-arrow-circle.svg"} alt={"previous month"} width={25} height={23} />
                <span>December</span>
                <Image src={"/right-arrow-circle.svg"} alt={"next month"} width={25} height={23} />
            </section> */}
{/*  */}
<Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

{/*  */}
            {/* Slot Selection */}
            <SlotBox shift="Morning" />
            <SlotBox shift="Afternoon" />

            {/* Next Button */}
            <button className={styles.nextBtn}>
                Next
            </button>
        </main>
    );
};

export default BookingBox;
