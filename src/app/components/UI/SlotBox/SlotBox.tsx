import SlotAvailable from "../SlotAvailable/SlotAvailable";
import SlotDisabled from "../SlotDisabled/SlotDisabled";
import styles from "./SlotBox.module.css"
import Image from "next/image";
const SlotBox = ({shift}:{shift:string}) => {
    const slotArray = ['t9:00', 't9:30','f10:00','f10:30','f11:00','t11:30','t12:00','t12:30']
    return ( 
        <main className={styles.container}>
            {/* slot top  */}
            <section className={styles.SlotTop}>
                <span className={styles.timeHead}>
                    <Image src={shift === 'Morning' ?"/sun.svg":"/sunset.svg"} alt={"morning"} 
                    width={23.43} height={21.65}/>
                    <span>
                        {shift}
                    </span>
                </span>
                <span className={styles.SlotTag}>
                    2 Slots
                </span>
            </section>
            
            {/* slot content */}
            <section className={styles.SlotContent}>
                <div className={styles.SlotTimings}>
                    {slotArray.map(slot => (
                        slot[0] === 't' ? 
                        <SlotAvailable shift={shift} time={slot.slice(1)} key={`${slot}`}/>:
                        <SlotDisabled shift={shift} time={slot.slice(1)} key={`${slot}`}/>
                    ))}
                </div>
            </section>
        </main>
     );
}
 
export default SlotBox;