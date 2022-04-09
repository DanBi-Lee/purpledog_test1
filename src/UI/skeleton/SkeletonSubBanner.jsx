import React from 'react';
import styles from './SkeletonSubBanner.module.css';

function SkeletonSubBanner ({inheritedStyles, isError=false}) {
    console.log(isError);
    return (
        <article className={[inheritedStyles.banner, styles.banner].join(" ")}>
            <h2 className='hidden'>중간배너</h2>
            {isError && <div className={styles.error_modal}>⚠ 에러가 발생했습니다.</div>}
        </article>
    );
}

export default SkeletonSubBanner;