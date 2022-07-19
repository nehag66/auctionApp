import { useEffect, useState } from "react";
import styles from './FeaturedProduct.module.css'

const FeaturedProduct =(props) => {

    const [image, setImage] = useState('')

    let productData = props.filteredProducts;

    useEffect(() => {
        // getAllImages();
    }, [])

    const getAllImages = async () => {
        const res = await fetch('http://3.110.56.143/api/items/:itemId/images/:imageId');
        const result = await res.json();
        setImage(result.items);
    }   
    

    return(
        <div className={styles.featured_product_outer_div}>
             <h1>{productData[0].brandName}</h1>
             <div className={styles.display_to_flex}>
             
                {
                    productData.map((ele, index) => {
                        return (
                            <div className={styles.flexBoxdd} key={index}>
                            
                                <div className={styles.indiItem} key={ele.id}>
                                    <ul>
                                        {/* {ele.itemImages[0] && <Image width={570} height={318} alt="app_link_banner1" className={styles.app_link_banner2} src={ele.itemImages[0].name} useMap="#workMap" /> */}
                                        { ele.itemImages[0] && <li>{ele.itemImages[0].name}</li>}
                                        <li style={{ fontSize: "18px", color: "#000000" }}>{ele.name}</li>
                                        <li style={{ fontSize: "18px", color: "#000000" }}>{ele.brandName}</li>
                                        <li style={{ fontSize: "16px", color: "#7b7674" }}>{ele.description}</li>
                                        <li style={{ fontSize: "16px", color: "#000000", padding: "20px 0"}}>&#8377;{ele.marketValue}</li>
                                        <li style={{ fontSize: "16px", color: "#7b7674" }}>Last Bid Date: {ele.lastBidDate}</li>
                                    </ul> 
                                    <div className={styles.deleteAndBid} key={ele.id}> 
                                        <button className={styles.bidBtn}>Make Bid</button> 
                                        <button className={styles.deleteBtn}>Delete Item</button>   
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProduct;