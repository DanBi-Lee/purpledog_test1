import React from 'react';

function ImageBannerItem({inherited_styles, children, props}) {
    return (
        <article className={inherited_styles.swiper__item} {...props}>
            <div className={inherited_styles.content__wrap}>
                    {children}
            </div>
        </article>
    );
}

export default ImageBannerItem;