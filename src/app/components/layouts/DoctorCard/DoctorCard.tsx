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
                        <div id={styles.addFrame}>
                            <Image src={"/stethoscope.png"} alt={"stethoscope"} width={17.5} height={15.01} />
                            <span>Dentist</span>
                        </div>
                        <div>
                            <Image src={"/hourglass.png"} alt={"hour glass"} width={17.5} height={15.01} />
                            <span>Dentist</span>
                        </div>
                    </div>
                </div>
                <div id={styles.review}>

                </div>
            </section>
        </article>
    );
}

export default DoctorCard;