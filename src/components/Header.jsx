import React from 'react';
import styles from './Header.module.css';
import icon_search from '../assets/icons/icon_search.svg';
import icon_cart from '../assets/icons/icon_cart.svg';
import icon_notice from '../assets/icons/icon_notice.svg';
import IconButton from '../UI/IconButton';

function Header () {
  return (
          <header className={styles.header_box}>
              <div className="left">
                <IconButton image={icon_search} alt="검색" parent_styles={styles} />
              </div>
              <div className="right">
                  <IconButton image={icon_notice} alt="알림" badge_message={<span className='hidden'>새 알림이 있습니다.</span>} parent_styles={styles} />
                  <IconButton image={icon_cart} alt="장바구니" badge_message={14} parent_styles={styles} />
              </div>
          </header>
  );
}

export default Header;