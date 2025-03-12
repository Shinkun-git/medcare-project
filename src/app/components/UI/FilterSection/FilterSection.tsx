import styles from "./FilterSection.module.css"

const FilterSection = ({ title, radioName, options }: { title: string, radioName: string, options: string[] }) => {

    return (
        <>
            <section className={styles.FilterSection} style={{height:`${options.length*45+45}px`}}>
                <div className={styles.FilterContent}>
                    <span>{title}</span>
                    <div className={styles.ListFrame}>
                        {options.map((option, index) => (
                            <div className={styles.radioButton} key={option+index}>
                                <input type="radio" name={radioName}
                                    id={`${radioName}${index}`} value={option} defaultChecked={index===0}/>
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