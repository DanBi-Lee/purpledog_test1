# 퍼플독 과제전형 #1 - 이단비

## 사용된 기술

- React
- css module

## 실행 방법

> ⚠ url을 환경변수로 만들어 사용하고 있기 때문에 개발모드로 프로젝트 실행 전 `root`에 `.env`파일을 생성해야 합니다.
> `.env`파일 내용은 아래와 같습니다.
>
> ```
> REACT_APP_URL = https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/
> 
> <!-- 메인 배너 -->
> 
> REACT_APP_URL_PATH_MAIN_BANNER = banner/bannerCodeId/MAIN_TOP
> REACT_APP_URL_PATH_SUB_BANNER_1 = banner/bannerCodeId/MAIN_SUB_1
> REACT_APP_URL_PATH_SUB_BANNER_2 = banner/bannerCodeId/MAIN_SUB_2
> 
> <!-- 화면별 텍스트 데이터 조회 -->
> 
> REACT_APP_URL_PATH_MAIN_TEXT = text/textGroupCode/MAIN
> 
> <!-- 어울리는 와인  -->
> 
> REACT_APP_URL_PATH_RECOMMEND_WINE = product/subscriptionWineRecommend
> 
> <!-- 타임 세일 영역 -->
> 
> REACT_APP_URL_PATH_TIME_SALE = product/selectTimeSaleWine
> 
> <!-- 인기 와인 리스트 -->
> 
> REACT_APP_URL_PATH_POPULAR_WINE = product/selectPopularWine
> 
> ```

1. `npm install` : 프로젝트 종속성 설치
2. `npm run start` : 개발모드에서 앱 실행
3. 혹은 https://danbi-lee.github.io/purpledog_test1/ 링크를 통해 배포된 프로젝트를 확인하실 수 있습니다.

## 구현사항 소개

> 과제 가이드 상 필수 구현요소라고 판단되는 부분은 **굵은 글씨**로 표시했습니다.

- 헤더

  - 헤더는 항상 스크롤을 따라다녀야 사용성이 좋을것이라 판단해서, 스크롤이 내려갈 경우 흰 배경에 검은 아이콘으로 보이도록 작업했습니다.
    - [[#2] 헤더 스크롤 기능 추가](https://github.com/DanBi-Lee/purpledog_test1/commit/6fb9163c0858fd8c881a5137ef05bbd00d49147d)

- **메인 배너**

  - 슬라이드 효과는 [swiper](https://swiperjs.com) 를 활용하여 구현했습니다.

    - [[#3] 메인 배너 슬라이드 기능 추가](https://github.com/DanBi-Lee/purpledog_test1/commit/47156f4b83fd0d60bc5b6bb4045f3d9bf2bd79d6)

  - **API 호출**

    - [[#4] 메인 배너 데이터 연결](https://github.com/DanBi-Lee/purpledog_test1/commit/5fbf91854ffdfd3339bdb6157e7289fd7a191969)

      > - 스켈레톤 UI를 사용하여 로딩중에도 비슷한 레이아웃이 보이도록 작업했습니다.

- **와인 추천 (어울리는 와인 조회)**

  - 슬라이드 효과는 swiper를 활용하여 구현했습니다.

  - **API 호출**

    - [[#11] 와인 추천 영역 슬라이드 기능 추가
      [#5] 와인 추천(어울리는 와인 조회) 데이터 연결](https://github.com/DanBi-Lee/purpledog_test1/commit/b8e51a1f35d659b24c74c82ec813474baec34265)

      > - 와인 추천(어울리는 와인 조회) API 상에 `name`이 존재하지 않아서 와인 데이터에 `name`이 없을 경우 `wineryName`이 노출되도록 만들었습니다.
      > - `timeSaleDiscountPercent `의 유무에 따라 와인 상품의 할인 여부를 구분할 수 있도록 만들었습니다.
      > - 상품 가격에 `,`표시를 하는 (ex. 1000 → 1,000) 유틸함수를 만들었습니다.

- **타임딜 (타임 세일)**

  - **API 호출**

    - [[#6] 타임딜 데이터 연결](https://github.com/DanBi-Lee/purpledog_test1/commit/1517b66326476826b48b50877eff5873ec161585)

      > - 타임딜 상품인지 구분하여 타이머가 표시되도록 작업했습니다.
      > - 타이머의 남은 시간을 표시하기 위해 유틸함수 `timer.js`를 만들었습니다.

  - **타이머 구현**

    - [[#7] 타임딜 타이머 구현](https://github.com/DanBi-Lee/purpledog_test1/commit/0b227dbcf1dd8cc2d5884031f1ac8ee8c080f2e5)

      > - `useTimer` 커스텀 훅을 만들어서 카운트다운이 되도록 구현했습니다.

- **중간 배너**

  - **API 호출**
  - [[#10] 중간 배너 데이터 연결](https://github.com/DanBi-Lee/purpledog_test1/commit/628e7bbef9a98483f8a147c5bb94589369f9352b)

- **인기 와인**

  - **API 호출**
    - [[#8] 인기 와인 데이터 연결](https://github.com/DanBi-Lee/purpledog_test1/commit/c21e199f5eb5b2b693c10404d638ee4980e52dd0)

- **타이틀영역 텍스트**

  - **API 호출**
    - [[#9] 타이틀 영역의 텍스트 데이터 연결](https://github.com/DanBi-Lee/purpledog_test1/commit/f55689ffd7b46c7d375594880cf4a4f83738317b)