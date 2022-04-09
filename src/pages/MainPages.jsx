import React, {useEffect} from 'react';
import {getData} from '../api/data';
import BottomNavigation from '../components/BottomNavigation';
import ExhibitionsSection from '../components/ExhibitionsSection';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import PopularSection from '../components/PopularSection';
import RecommendSection from '../components/RecommendSection';
import SubBannerSection from '../components/SubBannerSection';
import TimeDealSection from '../components/TimeDealSection';
import WorldSection from '../components/WorldSection';
import useHTTP from '../hooks/useHTTP';
import Main from '../layout/Main';
function MainPages() {
    const {state: titleState, fetchData} = useHTTP(getData);
    useEffect(() => {
        fetchData(process.env.REACT_APP_URL_PATH_MAIN_TEXT);
    }, [fetchData]);
    
    return ( <> 
    <Header/> 
    < BottomNavigation /> 
    <Main>
        <MainBanner/>
        <RecommendSection titleState={titleState} />
        <TimeDealSection titleState={titleState} />
        <SubBannerSection/>
        <WorldSection titleState={titleState} />
        <ExhibitionsSection titleState={titleState} />
        <PopularSection titleState={titleState} />
    </Main> 
    </>
  );
}

export default MainPages;