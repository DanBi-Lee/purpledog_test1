import React from 'react';
import styles from './BottomNavigation.module.css';
import iconHome from '../assets/icons/icon_home_nav-active.svg';
import icon_magazine from '../assets/icons/icon_magazine_nav.svg';
import icon_category from '../assets/icons/icon_category_nav.svg';
import icon_feed from '../assets/icons/icon_feed_nav.svg';
import icon_mypage from '../assets/icons/icon_mypage_nav.svg';

function BottomNavigation () {
  return (
    <nav className={styles.bottom_navigation}>
        <button className={styles.active}>
            <img src={iconHome} alt="홈" />
            <span>홈</span>
        </button>
        <button>
            <img src={icon_magazine} alt="매거진" />
            <span>매거진</span>
        </button>
        <button>
            <img src={icon_category} alt="카테고리" />
            <span>카테고리</span>
        </button>
        <button>
            <img src={icon_feed} alt="피드" />
            <span>피드</span>
        </button>
        <button>
            <img src={icon_mypage} alt="내정보" />
            <span>내정보</span>
        </button>
    </nav>
  );
}

export default BottomNavigation;