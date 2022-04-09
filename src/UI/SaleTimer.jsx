import React from 'react';
import useTimer from '../hooks/useTimer';
import styles from './SaleTimer.module.css';


function SaleTimer ({endDate}) {
  const time = useTimer(endDate);

  return (
    <p className={styles.deal_timer}>
        {`${time} 남음`}
    </p>
  );
}

export default SaleTimer;