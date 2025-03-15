import styles from "./SlotDisable.module.css"
const SlotDisabled = ({time,shift}:{time:string,shift:string}) => {
    return (
        <button className={styles.slotBtn} disabled>
            {time} {shift === "Morning"? " AM":" PM"}
        </button>
    );
}

export default SlotDisabled;