import styles from "./SlotAvailable.module.css"

const SlotAvailable = ({time,shift}:{time:string,shift:string}) => {
    return (
        <button className={styles.slotBtn}>
            {time}{shift==="Morning"?" AM": " PM"}
        </button>
    );
}

export default SlotAvailable;