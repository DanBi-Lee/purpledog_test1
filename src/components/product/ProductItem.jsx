import React from 'react';
import SaleTimer from '../../UI/SaleTimer';
import { addPriceComma } from '../../util/addPriceComma';
import styles from './ProductItem.module.css';
import SaleInfo from './SaleInfo';


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

    let {name, countryName, salesPrice, timeSaleDiscountPercent, timeSalePrice,thumbnailImageUrl, wineTypeName, timeSaleEndDate, wineryName }= product_data;
    

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
                    {name||wineryName}
                </h3>
                {
                    timeSaleDiscountPercent 
                    ? <SaleInfo inherited_styles={styles} timeSalePrice={timeSalePrice} timeSaleDiscountPercent={timeSaleDiscountPercent} salesPrice={salesPrice} />
                    : <p className={styles.price}>
                        {addPriceComma(salesPrice)}원
                    </p>
                }
                {
                    use_time_deal &&<SaleTimer endDate={timeSaleEndDate} />
                }
            </div>
        </article>
    );
}

export default ProductItem;