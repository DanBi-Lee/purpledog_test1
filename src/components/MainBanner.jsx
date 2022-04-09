import React, {useEffect} from 'react';
import styles from './MainBanner.module.css';
import {Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import useHTTP from '../hooks/useHTTP';
import {getData} from '../api/data';
import ImageBannerItem from './banner/ImageBannerItem';

function MainBanner() {
    const {state, fetchData} = useHTTP(getData);

    useEffect(() => {
        fetchData(process.env.REACT_APP_URL_PATH_MAIN_BANNER);
    }, [fetchData]);

    if (state.isLoading) {
        return (
            <ImageBannerItem inherited_styles={styles}>
                <div className={styles.state_message}>
                    로딩중
                </div>
            </ImageBannerItem>
        );
    }
    if (state.error) {
        return (
            <ImageBannerItem inherited_styles={styles}>
                <div className={styles.state_message}>
                    ⚠
                    <br/>
                    오류가 발생했습니다.
                </div>
            </ImageBannerItem>
        );
    }
    if (!(state.data && state.data.results)) {
        return (
            <ImageBannerItem inherited_styles={styles}>
                <div className={styles.state_message}>
                    ⚠
                    <br/>
                    오류가 발생했습니다.
                </div>
            </ImageBannerItem>
        );
    }

    return (
        <section className={styles.main_banner}>
            <Swiper
                modules={[Pagination, A11y]}
                pagination={{
                type: "progressbar"
            }}
                className={styles.swiper}>
                {state
                    .data
                    .results
                    .map(banner => (
                        <SwiperSlide key={banner.bannerId}>
                            <ImageBannerItem
                                inherited_styles={styles}
                                props={{
                                style: {
                                    backgroundImage: `url(${banner.thumbnailImageUrl})`
                                }
                            }}>
                                <span className="hidden">
                                    {banner.description}
                                </span>
                            </ImageBannerItem>
                        </SwiperSlide>
                    ))
}
            </Swiper>
        </section>
    );
}

export default MainBanner;