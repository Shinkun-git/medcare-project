import styles from "./page.module.css";

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
    availability: Record<string, string[]>; // Explicitly typing availability
};


// Pre-generate paths for static pages
export async function generateStaticParams() {
    const response = await fetch("http://localhost:3003/api/v1/doctors/all");
    const parsedJson = await response.json();
    // console.log("doctors", parsedJson);
    const doctors: Doctor[] = parsedJson.data;
    return doctors.map((doctor) => ({
        id: doctor.doc_id.toString(), // Next.js expects string values in params
    }));
}

// Fetch doctor data at build time and revalidate periodically
export async function getDoctor(id: string) {
    const response = await fetch(`http://localhost:3003/api/v1/doctors/searchDoctor/${id}`);

    if (!response.ok) {
        return null;
    }
    const {data } = await response.json();
    return data;
}

// Page component for doctor profile
export default async function DoctorProfile({ params }: { params: { id: string } }) {
    const doctor = await getDoctor(params.id);

    if (!doctor) {
        return <p>Doctor not found</p>;
    }

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
        </div>
    );
}
