import React from 'react';
import SkeletonSubBanner from '../../UI/skeleton/SkeletonSubBanner';
import styles from './SubBanner.module.css';

function SubBanner({state}) {
    if (state?.isLoading) {
        return <SkeletonSubBanner inheritedStyles={styles} />;
    }
    if(state?.error){
        return <SkeletonSubBanner inheritedStyles={styles} isError={true} />;
    }

    return (
        <article className={styles.banner} style={{backgroundImage: `url(${state?.data?.results[0]?.thumbnailImageUrl})`}}>
            <h2 className='hidden'>중간배너</h2>
        </article>
    );
}

export default SubBanner;