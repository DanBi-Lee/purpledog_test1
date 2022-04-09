import React, {useEffect} from 'react';
import useHTTP from '../hooks/useHTTP';
import MainSection from '../layout/MainSection';
import styles from "./TimeDealSection.module.css";
import {getData} from "../api/data";
import ProductList from './product/ProductList';
import SubBanner from './banner/SubBanner';

function TimeDealSection({titleState}) {
    const {state : productsState, fetchData: fetchProducts} = useHTTP(getData);
    useEffect(() => {
        fetchProducts("time_sale_wine.json");
    }, [fetchProducts]);
    const {state : bannerState, fetchData: fetchBanner} = useHTTP(getData);
    useEffect(() => {
        fetchBanner("main_banner/main_sub_1.json");
    }, [fetchBanner]);

    return (
        <MainSection
            title={titleState.data?.results?.RECOMMEND_PRODUCT_1_TITLE?.content}
            description={"와인을 정기 구독중인 회원님에게만 드려요."}
            state={titleState}
            className={styles.time_deal__section}>
            <SubBanner inheritedStyles={styles} state={bannerState} />
            <ProductList
                inherited_styles={styles}
                state={productsState}
                product_type
                ={{
                use_time_deal: true,
                type: "list"
            }}/>
        </MainSection>
    );
}

export default TimeDealSection;