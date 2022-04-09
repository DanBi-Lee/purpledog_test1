import React from 'react';
import MainSection from '../layout/MainSection';
import styles from './WorldSection.module.css';
import CountryItem from './category/CountryItem';
import country01 from "../assets/country/country_01.png";
import country02 from "../assets/country/country_02.png";
import country03 from "../assets/country/country_03.png";
import country04 from "../assets/country/country_04.png";
import country05 from "../assets/country/country_05.png";
import country06 from "../assets/country/country_06.png";

function WorldSection ({titleState}) {
  return (
      <MainSection state={titleState} title={titleState.data?.results?.COUNTRY_WINE_TITLE?.content} description={titleState.data?.results?.COUNTRY_WINE__DESCRIPTION?.content} style={{marginTop: '0.34rem'}}>
          <div className={styles.country__list_wrap}>
              <ul className={styles.country__list}>
                  <CountryItem title="프랑스" image={country01} />
                  <CountryItem title="이탈리아" image={country02} />
                  <CountryItem title="미국" image={country03} />
                  <CountryItem title="포르투갈" image={country04} />
                  <CountryItem title="호주" image={country05} />
                  <CountryItem title="스페인" image={country06} />
              </ul>
          </div>

      </MainSection>
  );
}

export default WorldSection;