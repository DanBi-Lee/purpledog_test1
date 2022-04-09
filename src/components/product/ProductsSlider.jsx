import React from 'react';
import {A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProductItem from './ProductItem';
import styles from './ProductsSlider.module.css';

import "swiper/css";

function ProductsSlider({state}) {
    console.log(state);

    if (state?.isLoading) {
        return (
            <div className={styles.state_message}>
                로딩중
            </div>
        );
    }
    if (state?.error) {
        return (
            <div className={styles.state_message}>
                ⚠
                <br/>
                오류가 발생했습니다.
            </div>
        );
    }
    if (!(state?.data && state.data?.results)) {
        console.log(state.data);
        return (
            <div className={styles.state_message}>
                ⚠
                <br/>
                데이터가 존재하지 않습니다.
            </div>
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