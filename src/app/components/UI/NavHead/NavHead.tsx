import styles from "./NavHead.module.css"
export default function NavHead(){
    return (
        <section className={styles.container}>
            <div className={styles.logoFrame}>
                <img src="/medCareLogo.png" alt="medCare Logo" className={styles.logo}/>
            </div>
            <p className={styles.head}>MedCare</p>
        </section>
    )
}