import styles from "./PagesFrame.module.css"
const PagesFrame = ({pages}:{pages:string[]}) => {
    return ( 
        <section className={styles.container}>
            {pages.map((page)=>(
                <button id={`button${page}`} className={styles.pageButton}>
                    {/* <span id={`span${page}`}> */}
                        {page}
                        {/* </span> */}
                </button>
            ))}
        </section>
     );
}
 
export default PagesFrame;