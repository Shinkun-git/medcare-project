import styles from "./page.module.css";
import { cookies } from "next/headers";

type Review = {
    review_id: number;
    user_email: string;
    rating: number;
    review: string;
};

export default async function ReviewsPage() {
    try {
        const cookieStore = await cookies();
        const cookieHeader = cookieStore.getAll().map(c => `${c.name}=${c.value}`).join("; ");
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/reviews/all`, {
            headers: { Cookie: cookieHeader },
            credentials: "include",
            cache: "no-store",
        });

        if (!response.ok) {
            return <p className={styles.errorMessage}>Reviews not found</p>;
        }

        const { data } = await response.json();
        const reviews: Review[] = data;

        return (
            <main className={styles.reviewPage}>
                <h1 className={styles.pageTitle}>Patient Reviews</h1>

                {reviews.length > 0 ? (
                    <div className={styles.reviewList}>
                        {reviews.map((review) => (
                            <div key={review.review_id} className={styles.reviewCard}>
                                <p className={styles.userEmail}><strong>User:</strong> {review.user_email}</p>
                                <p className={styles.rating}>⭐ {review.rating}/5</p>
                                <p className={styles.reviewText}>{review.review}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.noReviews}>No reviews available.</p>
                )}
            </main>
        );
    } catch (error) {
        console.error("Reviews fetch error:", error);
        return <p className={styles.errorMessage}>Failed to fetch reviews</p>;
    }
}
