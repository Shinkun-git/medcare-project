import styles from "./InputField.module.css"
import Image from "next/image";
import { Montserrat } from "next/font/google";
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})

const InputField = ({ inputLabel, vectorURL, placeholder  }:
    {inputLabel:string,vectorURL:string,placeholder:string}) => {
    return (
        <label htmlFor={inputLabel}>
            <section className={styles.outerFrame}>
                {inputLabel}
                <div className={styles.innerFrame}>
                    <div className={styles.mainFrame}>
                        <section>
                            <Image src={`${vectorURL}`} alt={`${inputLabel} vector`} width={15} height={15}
                                style={{ left: `${3}px`, top: `${3}px`, position: "relative" }} />
                        </section>
                        <input className={styles.input} type={inputLabel} name={inputLabel} id={inputLabel} placeholder={placeholder} />
                    </div>
                </div>
            </section>
        </label>
    );
}

export default InputField;