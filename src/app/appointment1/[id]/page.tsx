"use client";
import styles from "./page.module.css";
import { useEffect, useState, use } from "react";
type Availability = Record<string, string[]>;
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
    availability: Availability;
};

const DoctorProfile = ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = use(params); // ✅ Unwrap the promise using React.use()
    console.log("Extracted ID:", id);

    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                console.log("Fetching doctor with ID:", id);
                const response = await fetch(`http://localhost:3003/api/v1/doctors/searchDoctor/${id}`);
                if (!response.ok) throw new Error("Doctor not found");
                const {data} = await response.json();
                console.log("Fetched doctor:", data);
                setDoctor(data);
            } catch (error) {
                console.error("Error fetching doctor:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchDoctor();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!doctor) return <p>Doctor not found</p>;

    return (
        <div className={styles.profilePage}>
            <div className={styles.profileCard}>
                <h1 className={styles.name}>{doctor.name}</h1>
                <p className={styles.specification}>{doctor.specification}</p>
                <p className={styles.description}>{doctor.description}</p>
                <div className={styles.detailsGrid}>
                    <p><strong>ID:</strong> {doctor.doc_id}</p>
                    <p><strong>Gender:</strong> {doctor.gender}</p>
                    <p><strong>Experience:</strong> {doctor.experience} years</p>
                    <p><strong>Location:</strong> {doctor.location}</p>
                    <p><strong>Rating:</strong> ⭐ {doctor.rating}/5</p>
                    <p><strong>Degree:</strong> {doctor.degree}</p>
                </div>
                <div className={styles.availability}>
                    <h2>Availability</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Time Slots</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(doctor.availability).map(([day, slots]) => (
                                <tr key={day}>
                                    <td>{day}</td>
                                    <td>{slots.join(", ")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
