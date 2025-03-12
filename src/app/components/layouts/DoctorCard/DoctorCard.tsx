import styles from "./DoctorCard.module.css"
import Image from "next/image";
const DoctorCard = () => {
    return (
        <article className={styles.card}>
            <section className={styles.cardDetail}>

                <div className={styles.imageFrame}>
                    <Image src={"/doc1.png"} alt={""} width={150} height={150}
                        style={{ borderRadius: `99px`, objectFit: "cover" }} />
                </div>

                <div className={styles.title}>
                    <span className={styles.name}>
                        Dr Jane Doe, MBBS
                    </span>
                    <div className={styles.additional}>
                        <div className={styles.addFrame}>
                            <Image src={"/stethoscope.png"} alt={"stethoscope"} width={17.5} height={15.01} />
                            <span>Dentist</span>
                        </div>
                        <div className={styles.addFrame}>
                            <Image src={"/hourglass.png"} alt={"hour glass"} width={17.5} height={15.01} />
                            <span>9 years</span>
                        </div>
                    </div>
                </div>

                <div className={styles.review}>
                    <section className={styles.reviewFrame}>
                        <span>
                            Ratings:
                        </span>
                        <div className={styles.starFrame}>
                            <Image src={"/fillStar.png"} alt={"star rating"} width={17.5} height={17.5} />
                            <Image src={"/fillStar.png"} alt={"star rating"} width={17.5} height={17.5} />
                            <Image src={"/fillStar.png"} alt={"star rating"} width={17.5} height={17.5} />
                            <Image src={"/fillStar.png"} alt={"star rating"} width={17.5} height={17.5} />
                            <Image src={"/fillStar.png"} alt={"star rating"} width={17.5} height={17.5} />
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