import React, { useEffect } from 'react';
import { getData } from '../api/data';
import useHTTP from '../hooks/useHTTP';
import MainSection from '../layout/MainSection';
import ProductsSlider from './product/ProductsSlider';
import styles from './RecommendSection.module.css';

function RecommendSection({titleState}) {
    const {state : productsState, fetchData: fetchProducts} = useHTTP(getData);
    useEffect(() => {
        fetchProducts("wine_recommend.json");
    }, [fetchProducts]);

    return (
        <MainSection state={titleState} title={`김새콤달콤${titleState?.data?.results?.PERSONAL_RECOMMEND_TITLE.content}`} description="회원님이 선택한 취향의 와인만 추천드려요." className={styles.recommend_section} >
            <ProductsSlider state={productsState} />
        </MainSection>
    );
}

export default RecommendSection;