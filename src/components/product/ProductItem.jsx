import React from 'react';
import SaleTimer from '../../UI/SaleTimer';
import styles from './ProductItem.module.css';


function ProductItem({type = "card", number_of_title_line=2, use_time_deal=false, product_data }) {
    let item_type = 'product__item';
    switch(type){
        case "list" :
            item_type += '__list';
            break;
        default :
            item_type += '';
    }

    if(!product_data){
        product_data = { name : "", salesPrice: 0, timeSalePrice:0 };
    }

    let {name, countryName, salesPrice, timeSaleDiscountPercent, timeSalePrice,thumbnailImageUrl, wineTypeName, timeSaleEndDate  }= product_data;
    

    return (
        <article className={styles[item_type]}>
            <div className={styles.product_thumb__wrap} style={{backgroundImage: `url('${thumbnailImageUrl}')` }}>
            </div>
            <div className={styles.product_info}>
                <p className={styles.category}>
                    <span>{countryName}</span>
                    {wineTypeName&&<span>${wineTypeName}와인</span>}
                </p>
                <h3 className={styles.title} style={{WebkitLineClamp : number_of_title_line}}>
                    {name}
                </h3>
                <p className={styles.price}>
                    {timeSalePrice.toLocaleString()}원
                </p>
                <p>
                    <span className={styles.price__discount}>{timeSaleDiscountPercent}%</span>
                    <del className={styles.price__original}>{salesPrice.toLocaleString()}원</del>
                </p>
                {
                    use_time_deal &&<SaleTimer endDate={timeSaleEndDate} />
                }
            </div>
        </article>
    );
}

export default ProductItem;