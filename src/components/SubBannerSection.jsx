import React, { useEffect } from 'react';
import { getData } from '../api/data';
import useHTTP from '../hooks/useHTTP';
import SubBanner from './banner/SubBanner';
import styles from "./SubBannerSection.module.css";

function SubBannerSection() {
    const {state : bannerState, fetchData: fetchBanner} = useHTTP(getData);
    useEffect(() => {
        fetchBanner(process.env.REACT_APP_URL_PATH_SUB_BANNER_2);
    }, [fetchBanner]);
    return (
        <section className={styles.sub_banner__section}>
            <h2 className="hidden">서브 배너</h2>
            <SubBanner inheritedStyles={styles} state={bannerState} />
        </section>
    );
}

export default SubBannerSection;