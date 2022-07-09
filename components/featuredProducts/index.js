import { useEffect, useState } from "react";
import styles from './FeaturedProducts.module.css'

const FeaturedProducts = (props) => {

    const [data, setData] = useState([])

    const getAllData = async () => {
        const res = await fetch('http://3.110.56.143/api/items?sort=id');
        const result = await res.json();
        console.log("data:====> ", result)
        setData(result.items)
    }

    useEffect(() => {
        getAllData();
      }, [])
    
    return (
        <div className={styles.featured_product_outer_div}>
            <h2>Featured Products</h2>
            <div className={styles.featured_product_list}>
            {
                data && data.map((key, index) => {
                    return (
                        <div className={styles.indiItem} key={index}>
                            <ul>
                                <li style={{ fontSize: "18px", color: "#000000" }}>{key.name}</li>
                                <li style={{ fontSize: "16px", color: "#7b7674" }}>{key.brandName}</li>
                                <li style={{ fontSize: "16px", color: "#7b7674" }}>{key.description}</li>
                                <li style={{ fontSize: "16px", color: "#000000", padding: "20px 0"}}>&#8377;{key.marketValue}</li>
                                <li style={{ fontSize: "16px", color: "#7b7674" }}>Last Bid Date: {key.lastBidDate}</li>
                            </ul> 
                            <div className={styles.deleteAndBid}> 
                                <button className={styles.bidBtn}>Make Bid</button> 
                                <button className={styles.deleteBtn}>Delete Item</button>   
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default FeaturedProducts;





