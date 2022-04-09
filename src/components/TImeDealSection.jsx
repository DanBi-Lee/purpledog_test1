import React, {useEffect} from 'react';
import useHTTP from '../hooks/useHTTP';
import MainSection from '../layout/MainSection';
import styles from "./TimeDealSection.module.css";
import {getData} from "../api/data";
import ProductList from './product/ProductList';

function TimeDealSection({titleState}) {
    const {state, fetchData} = useHTTP(getData);
    useEffect(() => {
        fetchData("time_sale_wine.json");
    }, [fetchData]);

    return (
        <MainSection
            title={titleState.data?.results?.RECOMMEND_PRODUCT_1_TITLE?.content}
            description={"와인을 정기 구독중인 회원님에게만 드려요."}
            state={titleState}
            className={styles.time_deal__section}>
            <article className={styles.banner}>
                <h2 className='hidden'>중간배너</h2>
                중간배너 내용
            </article>
            <ProductList
                inherited_styles={styles}
                state={state}
                product_type
                ={{
                use_time_deal: true,
                type: "list"
            }}/>
        </MainSection>
    );
}

export default TimeDealSection;