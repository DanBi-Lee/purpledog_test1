import React from 'react';
import styles from './SkelotonProductList.module.css';

function SkelotonProductList ({isError=false}) {
  return (
      <div className={styles.skeleton__list}>
          <div className={styles.skeleton__item} />
          <div className={styles.skeleton__item} />
          <div className={styles.skeleton__item} />
          {isError && <div className={styles.error_modal}>⚠ 에러가 발생했습니다.</div>}
      </div>
  );
}

export default SkelotonProductList;