import { useEffect, useState } from "react";
import FeaturedProduct from "../featuredProfuct";
import styles from './FeaturedProducts.module.css'

const FeaturedProducts = (props) => {

    const [data, setData] = useState([])
    const [brandArray, setBrandArray] = useState([])

    useEffect(() => {
        getAllData();
    }, [])

    //getting all the products
    const getAllData = async () => {
        const res = await fetch('http://3.110.56.143/api/items?sort=id');
        const result = await res.json();
        setData(result.items);
        let brands = result.items.map(ele => {
            let brandName = ele.brandName;
            return brandName;
        })
        setBrandArray(brands);
    }   

    const gfp = (brand) => {
        let filtered = data.filter(ele => {
           return ele.brandName == brand;
        })
        return filtered;
    }

    return (
        <div className={styles.featured_product_outer_div}>
            {
                brandArray.map(brand => {
                    return  <FeaturedProduct filteredProducts={gfp(brand)}/>
                })
            }
        </div>
    )
}

export default FeaturedProducts;





