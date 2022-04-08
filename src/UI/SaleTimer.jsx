import React from 'react';
import { timer } from '../util/timer';
import styles from './SaleTimer.module.css';


function SaleTimer ({endDate}) {
  return (
    <p className={styles.deal_timer}>
        {`${timer(endDate)} 남음`}
    </p>
  );
}

export default SaleTimer;