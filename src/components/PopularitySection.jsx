import React from 'react';
import styles from './PopularitySection.module.css'
import MainSection from '../layout/MainSection';
import ProductItem from './product/ProductItem';

function PopularitySection () {
  return (
      <MainSection title="퍼플독 인기 와인" description="지금 가장 핫한 와인만 모아봤어요." style={{marginTop: "0.34rem"}}>
          <div className={styles.product__list__wrap}>
              <ul className={styles.product__list}>
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
              </ul>
          </div>

      </MainSection>
  );
}

export default PopularitySection;