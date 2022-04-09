import React, { useEffect } from 'react';
import styles from './PopularSection.module.css'
import MainSection from '../layout/MainSection';
import ProductList from './product/ProductList';
import useHTTP from '../hooks/useHTTP';
import { getData } from '../api/data';

function PopularSection({titleState}) {
  const {state : productsState, fetchData: fetchProducts} = useHTTP(getData);
  useEffect(() => {
      fetchProducts("popularwine.json");
  }, [fetchProducts]);

    return (
        <MainSection
            state={titleState}
            title={titleState.data
            ?.results
                ?.RECOMMEND_PRODUCT_2_TITLTE
                    ?.content}
            description={titleState.data
            ?.results
                ?.RECOMMEND_PRODUCT_2_DESCRIPTION
                    ?.content}
            style={{
            marginTop: "0.34rem"
        }}>
          <ProductList state={productsState} inherited_styles={styles} />
        </MainSection>
    );
}

export default PopularSection;