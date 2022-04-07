import React from 'react';
import styles from './CountryItem.module.css';

function CountryItem ({ title, image}) {
  return (
      <li className={styles.item} style={{backgroundImage: `url('${image}')`}}>
          <div className={styles.content}>
            {title}
          </div>
      </li>
  );
}

export default CountryItem;