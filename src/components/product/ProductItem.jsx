import React from 'react';
import styles from './ProductItem.module.css';


function ProductItem({type = "card", number_of_title_line=2, use_time_deal=false}) {
    let item_type = 'product__item';
    switch(type){
        case "list" :
            item_type += '__list';
            break;
        default :
            item_type += '';
    }

    return (
        <li className={styles[item_type]}>
            <div className={styles.product_thumb__wrap}>
            </div>
            <div className={styles.product_info}>
                <p className={styles.category}>
                    <span>프랑스</span>
                    <span>제로와인</span>
                </p>
                <p className={styles.title} style={{WebkitLineClamp : number_of_title_line}}>
                    까르뜨 블랑슈 벡스토퍼미주리 호퍼 빈야드 2줄까지
                </p>
                <p className={styles.price}>
                    39,500원
                </p>
                <p>
                    <span className={styles.price__discount}>12%</span>
                    <del className={styles.price__original}>45,400원</del>
                </p>
                {
                    use_time_deal &&
                    <p className={styles.deal_timer}>
                        {`${'10:37:02'} 남음`}
                    </p>
                }
            </div>
        </li>
    );
}

export default ProductItem;