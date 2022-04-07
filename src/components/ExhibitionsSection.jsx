import React from 'react';
import MainSection from '../layout/MainSection';
import background from '../assets/exhibitions/exhibition_01.png';
import styles from './ExhibitionsSection.module.css';

function ExhibitionsSection () {
  return (
      <MainSection title="기획전 모아보기" description="퍼플독에서만 만날 수 있는 기획전, 놓치지 마세요!" style={{marginTop: "34px"}}>
          <div className={styles.exhibition__wrap}>
              <article className={styles.exhibition} style={{backgroundImage: `url('${background}')`}}>
                  <div className={styles.exhibition__text}>
                    <h3 className={styles.exhibition__title}>와인으로 떠나는 세계여행, <br />와인 기획전 OPEN!</h3>
                    <p className={styles.exhibition__date}>22.02.15 - 22.03.15</p>
                  </div>
              </article>
          </div>
      </MainSection>
  );
}

export default ExhibitionsSection;