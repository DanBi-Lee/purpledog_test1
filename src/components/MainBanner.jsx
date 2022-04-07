import React from 'react';
import styles from './MainBanner.module.css';
import {Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

function MainBanner() {
    return (
        <section className={styles.main_banner}>
            <Swiper
                modules={[Pagination, A11y]}
                pagination={{
                type: "progressbar",
            }}
                className={styles.swiper}>
                <SwiperSlide>
                    <article className={styles.swiper__item}>
                        <div className={styles.content__wrap}>
                            <h3>01</h3>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.swiper__item}>
                        <div className={styles.content__wrap}>
                            <h3>02</h3>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.swiper__item}>
                        <div className={styles.content__wrap}>
                            <h3>03</h3>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.swiper__item}>
                        <div className={styles.content__wrap}>
                            <h3>04</h3>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default MainBanner;