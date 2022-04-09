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
        fetchProducts(process.env.REACT_APP_URL_PATH_TIME_SALE);
    }, [fetchProducts]);
    const {state : bannerState, fetchData: fetchBanner} = useHTTP(getData);
    useEffect(() => {
        fetchBanner(process.env.REACT_APP_URL_PATH_SUB_BANNER_1);
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