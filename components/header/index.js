import styles from "./header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className="text-3xl font-bold headerText">
                Auction App
            </h1>
            <div className={styles.rightHeaderContent}>
                <input type="text" name="name" placeholder="Search" className={styles.searchInput} />
                <button className={styles.loginBtn}>Login</button>
            </div>
        </div>
    )
}

export default Header;