import styles from "./PagesFrame.module.css"
const PagesFrame = ({pages}:{pages:string[]}) => {
    return ( 
        <section className={styles.container}>
            {pages.map((page)=>(
                <button key={page} className={styles.pageButton}>
                        {page}
                </button>
            ))}
        </section>
     );
}
 
export default PagesFrame;