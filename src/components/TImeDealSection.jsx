import React from 'react';
import MainSection from '../layout/MainSection';
import ProductItem from './product/ProductItem';
import styles from "./TimeDealSection.module.css";

function TImeDealSection() {
    return (
        <MainSection title="지금만 이 가격이에요." description="와인을 정기 구독중인 회원님에게만 드려요." className={styles.time_deal__section} >
            <article className={styles.banner}>
                <h2 className='hidden'>중간배너</h2>
                중간배너 내용
            </article>
            <div className={styles.product__list_wrap}>
                <ul className={styles.product__list}>
                    <ProductItem type="list" use_time_deal={true} />
                    <ProductItem type="list" use_time_deal={true} />
                    <ProductItem type="list" use_time_deal={true} />
                </ul>
            </div>
        </MainSection>
    );
}

export default TImeDealSection;