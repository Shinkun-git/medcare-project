import { Montserrat } from "next/font/google";
import styles from "./SearchDBTN.module.css"

const MontserratFont = Montserrat({
    subsets:[],
    weight:"500"
  })

const SearchDBTN = ({text, bgColor}:{text:string, bgColor:string}) => {
    return ( 
        <button className={`${styles.button} ${MontserratFont.className}`} style={{background:`${bgColor}`}}>
            {text}
        </button>
     );
}
 
export default SearchDBTN;