import React from 'react';
import styles from './PopularSection.module.css'
import MainSection from '../layout/MainSection';
import ProductItem from './product/ProductItem';

function PopularSection ({titleState}) {
  return (
      <MainSection state={titleState} title={titleState.data?.results?.RECOMMEND_PRODUCT_2_TITLTE?.content} description={titleState.data?.results?.RECOMMEND_PRODUCT_2_DESCRIPTION?.content} style={{marginTop: "0.34rem"}}>
          <div className={styles.product__list__wrap}>
              <div className={styles.product__list}>
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
                <ProductItem number_of_title_line="1" />
              </div>
          </div>

      </MainSection>
  );
}

export default PopularSection;