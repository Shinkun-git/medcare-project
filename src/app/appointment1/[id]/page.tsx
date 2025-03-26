import styles from "./page.module.css";
import { cookies } from "next/headers"; // ✅ Import cookies from Next.js

type Doctor = {
    doc_id: number;
    name: string;
    gender: string;
    specification: string;
    experience: number;
    description: string;
    location: string;
    rating: number;
    degree: string;
    availability: Record<string, string[]>;
};

// ✅ Use a Server Component with SSR
export default async function DoctorProfile({ params }: { params: { id: string } }) {
    // ✅ Get cookies manually
    const cookieHeader = cookies().toString();

    try {
        const response = await fetch(`http://localhost:3003/api/v1/doctors/searchDoctor/${params.id}`, {
            headers: {
                Cookie: cookieHeader, // ✅ Forward the cookie
            },
            credentials: "include",
            cache: "no-store", // ✅ Ensures fresh data (SSR)
        });

        if (!response.ok) {
            return <p>Doctor not found</p>;
        }

        const { data: doctor } = await response.json();

        return (
            <div className={styles.profileContainer}>
                <h1 className={styles.name}>{doctor.name}</h1>
                <p className={styles.specification}>{doctor.specification}</p>
                <p className={styles.description}>{doctor.description}</p>
                <p><strong>Experience:</strong> {doctor.experience} years</p>
                <p><strong>Location:</strong> {doctor.location}</p>
                <p><strong>Rating:</strong> ⭐ {doctor.rating}/5</p>
                <p><strong>Degree:</strong> {doctor.degree}</p>

                <h2>Availability</h2>
                <table>
                    <thead>
                        <tr><th>Day</th><th>Time Slots</th></tr>
                    </thead>
                    <tbody>
                        {Object.entries(doctor.availability).map(([day, slots]) => (
                            <tr key={day}>
                                <td>{day}</td>
                                <td>{Array.isArray(slots) ? slots.join(", ") : "No slots available"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <a href={`/appointment1/${doctor.doc_id}/booking`} className={styles.bookButton}>
                    Book Appointment
                </a>
            </div>
        );
    } catch (error) {
        console.error("Doctor fetch error:", error);
        return <p>Doctor not found</p>;
    }
}
