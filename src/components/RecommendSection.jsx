import React from 'react';
import MainSection from '../layout/MainSection';
import ProductItem from './product/ProductItem';
import styles from './RecommendSection.module.css';

function RecommendSection({titleState}) {
    return (
        <MainSection state={titleState} title={`김새콤달콤${titleState?.data?.results?.PERSONAL_RECOMMEND_TITLE.content}`} description="회원님이 선택한 취향의 와인만 추천드려요." className={styles.recommend_section} >
            <div className={styles.product__list_wrap}>
                <div className={styles.product__list}>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </MainSection>
    );
}

export default RecommendSection;