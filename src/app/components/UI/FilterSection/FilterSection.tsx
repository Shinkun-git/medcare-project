import styles from "./FilterSection.module.css"

const FilterSection = ({ title, radioName, options }: { title: string, radioName: string, options: string[] }) => {

    return (
        <>
            <section id={styles.FilterSection}>
                <div id={styles.FilterContent}>
                    <span>{title}</span>
                    <div id={styles.ListFrame}>
                        {options.map((option, index) => (
                            <div className={styles.radioButton} key={option+index}>
                                <input type="radio" name={radioName}
                                    id={`${radioName}${index}`} value={option} checked={index===0}/>
                                <label htmlFor={`${radioName}${index}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default FilterSection;