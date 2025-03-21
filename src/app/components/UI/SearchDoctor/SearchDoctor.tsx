import styles from "./SearchDoctor.module.css"
import Image from "next/image";
import { Montserrat } from "next/font/google"
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})
const SearchDoctor = () => {
    return (
        <section className={styles.searchDetails}>
            <div className={styles.frame1}>
                <div className={styles.frame2}>
                    <div>
                        <div className={styles.vectorFrame}>
                            <label htmlFor="search">
                                <Image src="/search-vector.svg" alt="search" width={20} height={20} />
                            </label>
                        </div>
                        <input className={`${MontserratFont.className}`} type="text" name="search" id="search" placeholder="Search doctors" />
                    </div>
                </div>
            </div>
            <button className={`${styles.searchBtn} ${MontserratFont.className}`}>
                <span>
                    Search
                </span>
            </button>
        </section>
    );
}

export default SearchDoctor;