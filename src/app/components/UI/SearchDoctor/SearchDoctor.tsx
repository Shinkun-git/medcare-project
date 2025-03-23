import styles from "./SearchDoctor.module.css"
import Image from "next/image";
import { Montserrat } from "next/font/google"
import { useState } from "react";
const MontserratFont = Montserrat({
    subsets: [],
    weight: "500"
})

type SearchDoctorProps = {
    onSearch: (searchValue: string) => void;
}
const SearchDoctor:React.FC<SearchDoctorProps> = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState("");
    
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = () => {
        if(searchValue.trim() !== ""){
            onSearch(searchValue);
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){  
            handleSearch();
        }
    }

    return (
        <section className={styles.searchDetails}>
            <div className={styles.frame1}>
                <div className={styles.frame2}>
                    <div>
                        <div className={styles.vectorFrame}>
                            <label htmlFor="search">
                                <Image src="/search-vector.svg" alt="search" width={20} height={20} />
                            </label>
                        </div>
                        <input className={`${MontserratFont.className}`} 
                        type="text" name="search" id="search" 
                        placeholder="Search doctors" 
                        value={searchValue}
                        onChange={searchHandler}
                        onKeyDown={handleKeyDown}/>
                    </div>
                </div>
            </div>
            <button className={`${styles.searchBtn} ${MontserratFont.className}`}
            onClick={handleSearch}>
                <span>
                    Search
                </span>
            </button>
        </section>
    );
}

export default SearchDoctor;