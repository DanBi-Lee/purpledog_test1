import React from 'react';
import styles from './IconButton.module.css';

function IconButton({
    image,
    alt,
    badge_message,
    parent_styles,
    ...props
}) {
    return (
        <button className={`${styles.icon_button} ${parent_styles.icon_button}`} {...props}>
            <img src={image} alt={alt}/>
            {
              badge_message&&
              <span className={styles.badge}>
                  {badge_message}
              </span>
            }
            
        </button>
    );
}

export default React.memo(IconButton);