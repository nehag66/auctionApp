import styles from "./header.module.css"
import Popup from 'reactjs-popup';
import Login from '../login';
import { useState } from "react";

const Header = () => {
    const [showLogin, setShowLogin] = useState(false)

    const loginClicked = (event) => {
        event.preventDefault();
        setShowLogin(!showLogin);
    }

    return (
        <div>
            <div className={` relative ${styles.header}`}>
                <h1 className="text-3xl font-bold headerText">
                    Auction App
                </h1>
                <div className={styles.rightHeaderContent}>
                    <input type="text" name="name" placeholder="Search" className={styles.searchInput} />
                    <button className={styles.loginBtn} onClick={loginClicked}>Login</button>
                </div>
            </div>
            {showLogin && 
                <div  className="absolute w-screen h-screen z-10 flex justify-center items-center" >
                    <div className=" w-1/2">
                        <Login />
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;