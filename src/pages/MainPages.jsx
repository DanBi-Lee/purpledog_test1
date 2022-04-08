import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import ExhibitionsSection from '../components/ExhibitionsSection';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import PopularitySection from '../components/PopularitySection';
import RecommendSection from '../components/RecommendSection';
import SubBannerSection from '../components/SubBannerSection';
import TimeDealSection from '../components/TimeDealSection';
import WorldSection from '../components/WorldSection';
import Main from '../layout/Main';
function MainPages () {
  return (
      <>
          <Header />
          <BottomNavigation />
          <Main>
              <MainBanner />
              <RecommendSection />
              <TimeDealSection />
              <SubBannerSection />
              <WorldSection />
              <ExhibitionsSection />
              <PopularitySection />
          </Main>
      </>
  );
}

export default MainPages;