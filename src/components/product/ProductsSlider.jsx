import React from 'react';
import {A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProductItem from './ProductItem';
import styles from './ProductsSlider.module.css';

import "swiper/css";
import SkelotonProductList from '../../UI/skeleton/SkelotonProductList';

function ProductsSlider({state}) {
    if (state?.isLoading) {
        return (
            <SkelotonProductList />
        );
    }
    if (state?.error) {
        return (
            <SkelotonProductList isError={true} />
        );
    }
    if (!(state?.data && state.data?.results)) {
        return (
            <SkelotonProductList isError={true} />
        );
    }

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            modules={[A11y]}
            className={styles.swiper}
        >
            {state
                .data
                .results
                .map(product => (
                    <SwiperSlide key={product.productId}>
                        <ProductItem product_data={product} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default ProductsSlider;