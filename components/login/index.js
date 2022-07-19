import { useState } from "react";
import styles from "./login.module.css"

const Login  = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        
      };
// 3.110.56.143/api/items?sort=id
    return (
        <div className={styles.login_form}>
            <form onSubmit={handleSubmit}>
                <div className={` absolute top-96 right-80 ${styles.closeBtn}`}>
                    <button onClick={()=> {}}>X</button>
                </div>
                <div className={styles.input_container}>
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className={styles.input_container}>
                    <label>Password </label>
                    <input type="password" name="pass" required />
                </div>
                <div className={styles.button_container}>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login;