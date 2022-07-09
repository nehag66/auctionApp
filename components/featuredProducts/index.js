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
        <div>
            <h2>Featured Products</h2>
            {
                data && data.map((key, index) => {
                    return (
                        <div className={styles.featured_product_list} key={index}>
                            {key.brandName}
                            {/* <div className={styles.featured_product}></div> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FeaturedProducts;





