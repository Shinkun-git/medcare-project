import styles from "./DoctorCard.module.css"
import Image from "next/image";
const DoctorCard = () => {
    return (
        <article id={styles.card}>
            <section id={styles.cardDetail}>
                <div id={styles.imageFrame}>
                    <Image src={"/doc1.png"} alt={""} width={150} height={150}
                        style={{ borderRadius: `99px` }} />
                </div>
                <div id={styles.title}>
                    <span id={styles.name}>
                        Dr Jane Doe, MBBS
                    </span>
                    <div id={styles.additional}>
                        <Image src={"/stethoscope"} alt={""} />
                    </div>
                </div>
                <div id={styles.review}>

                </div>
            </section>
        </article>
    );
}

export default DoctorCard;