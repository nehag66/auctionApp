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
        console.log("result: ", result)
        setData(result.items);
        let brands = result.items.map(ele => {
            let brandName = ele.brandName;
            return brandName;
        })

        setBrandArray(brands.filter(onlyUnique));
        
    }   
    // console.log("brandArray: ", brandArray)

    //helper function
    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
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
                brandArray.map((brand, index) => {
                    return  <FeaturedProduct key={index} filteredProducts={gfp(brand)}/>
                })
            }
        </div>
    )
}

export default FeaturedProducts;





