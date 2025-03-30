import AddReview from "@/app/components/layouts/AddReview/AddReview";
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

type Review = {
    review_id:number,
    user_email: string;
    rating: number;
    review: string;
};

// ✅ Use a Server Component with SSR
export default async function DoctorProfile({ params }: { params: { id: string } }) {
    if (!params) {
        return <p>Invalid doctor ID</p>;
    }
    const { id } = await params;

    try {
        const cookieStore = await cookies();
        const cookieHeader = cookieStore.getAll().map(c => `${c.name}=${c.value}`).join("; ");

        const response = await fetch(`http://localhost:3003/api/v1/doctors/searchDoctor/${id}`, {
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

        const reviewResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/reviews/all/${id}`, {
            headers: {
                Cookie: cookieHeader, // ✅ Forward the cookie
            },
            credentials: "include",
            cache: "no-store", // ✅ Ensures fresh data (SSR)
        });

        let reviews: Review[] = [];
        if (reviewResponse.ok) {
            const { data } = await reviewResponse.json();
            reviews = data;
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

                <a href={`/appointment1/${doctor.doc_id}/booking`} className={styles.bookButton}>
                    Book Appointment
                </a>
                    
                {/* add review component */}
                <AddReview doctorId={parseInt(id)}/>


                {/* Render Reviews if available */}
                {reviews.length > 0 ? (
                    <div className={styles.reviewsSection}>
                        <h2>Patient Reviews</h2>
                        {reviews.map((review, index) => (
                            <div key={index} className={styles.reviewCard}>
                                <p><strong>{review.review_id}</strong></p>
                                <p><strong>{review.user_email}</strong></p>
                                <p>⭐ {review.rating}/5</p>
                                <p>{review.review}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        );
    } catch (error) {
        console.error("Doctor fetch error:", error);
        return <p>Doctor not found</p>;
    }
}
