import styles from "./DoctorCard.module.css"
import Image from "next/image";
const DoctorCard = ({ name, specialty, experience, rating, image }:
    { name: string, specialty: string, experience: number, rating: number, image: string }
) => {
    const totalStars = rating;
    return (
        <article className={styles.card}>
            <section className={styles.cardDetail}>

                <div className={styles.imageFrame}>
                    <Image src={image} alt={name} width={150} height={150}
                        style={{ borderRadius: `99px`, objectFit: "cover" }} />
                </div>

                <div className={styles.title}>
                    <span className={styles.name}>
                        {name}
                    </span>
                    <div className={styles.additional}>
                        <div className={styles.addFrame}>
                            <Image src={"/stethoscope.png"} alt={"stethoscope"} width={17.5} height={15.01} />
                            <span>{specialty}</span>
                        </div>
                        <div className={styles.addFrame}>
                            <Image src={"/hourglass.png"} alt={"hour glass"} width={17.5} height={15.01} />
                            <span>{experience} Years</span>
                        </div>
                    </div>
                </div>

                <div className={styles.review}>
                    <section className={styles.reviewFrame}>
                        <span>
                            Ratings:
                        </span>
                        <div className={styles.starFrame}>
                        {Array.from({ length: rating }).map((_, index) => (
                                <Image key={`filled-${index}`} src={"/fillStar.png"} alt="filled star" width={17.5} height={17.5} />
                            ))}

                            {/* Render Empty Stars */}
                            {Array.from({ length: 5 - rating }).map((_, index) => (
                                <Image key={`empty-${index}`} src={"/hollowStar.png"} alt="empty star" width={17.5} height={17.5} />
                            ))}
                        </div>
                    </section>
                </div>
            </section>
            <button className={styles.cardButton}>
                <span className={styles.buttonText}>
                    Book Appointment
                </span>
            </button>
        </article>
    );
}

export default DoctorCard;