import React from 'react';
import ProductItem from './ProductItem';
import styles from './ProductList.module.css';

function ProductList({state, inherited_styles, product_type}) {
    if(state?.isLoading){
        return  <div className={styles.message__wrap}>로딩중...</div>;
    }
    if(state?.error){
        return  <div className={styles.message__wrap}>⚠ 오류가 발생했습니다.</div>
    }
    if(! (state?.data && state.data?.results)){
        return <div className={styles.message__wrap}>⚠ 응답이 잘못되었습니다.</div>
    }
    if(!state.data.results){
        return <div className={styles.message__wrap}>⚠ 등록된 상품이 없습니다.</div>
    }

    return (
        <div className={inherited_styles.product__list__wrap}>
            <ul className={inherited_styles.product__list}>
                {state
                    .data
                    .results
                    .map(item => {
                        return <ProductItem
                            key={item.productId}
                            product_data={item}
                            {...product_type}
                            />
                    })}
            </ul>
        </div>
    );
}

export default ProductList;