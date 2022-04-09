import React, { useCallback, useEffect, useState } from 'react';
import styles from './Header.module.css';
import icon_search from '../assets/icons/icon_search.svg';
import icon_cart from '../assets/icons/icon_cart.svg';
import icon_notice from '../assets/icons/icon_notice.svg';
import IconButton from '../UI/IconButton';

function Header () {
  const [isTop, setIsTop] = useState(true);

  const getIsTop = useCallback(() => {
    if(window.scrollY <= 0){
      setIsTop(()=>true);
    }else{
      setIsTop(()=>false);
    }
  }, []);

  useEffect(()=>{
    window.addEventListener("scroll", getIsTop);
    return ()=>{
      window.removeEventListener("scroll", getIsTop)
    }
  }, [getIsTop]);

  return (
          <header className={`${styles.header_box} ${isTop? "" : styles.header_box__scroll}`}>
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