import React from 'react';
import styles from "./SubBannerSection.module.css";

function SubBannerSection() {
    return (
        <article className={styles.banner}>
            <h2 className='hidden'>중간배너</h2>
            중간배너 내용
        </article>
    );
}

export default SubBannerSection;