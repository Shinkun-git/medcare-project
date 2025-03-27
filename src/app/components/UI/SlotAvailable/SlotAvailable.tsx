import styles from "./SlotAvailable.module.css"

interface SlotAvailableProps {
    time: string;
    shift: string;
    onSlotSelect: (time: string) => void;
}

const SlotAvailable = ({time,shift,onSlotSelect}:SlotAvailableProps) => {
    return (
        <button className={styles.slotBtn} onClick={()=>onSlotSelect(time)}>
            {time.slice(0,time.length-3)}{shift==="Morning"?" AM": " PM"}
        </button>
    );
}

export default SlotAvailable;