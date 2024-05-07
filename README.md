# outfit_weather
기온에 맞는 옷 코디추천 서비스





노션: https://www.notion.so/e8e8c5788f3d4461b38cd3d6a536b92f  

임시배포: https://outfit-weather-iota.vercel.app

미리보기:





https://github.com/Johyuncheol/outfit_weather/assets/51200912/349a8965-8725-44a3-8b78-e2772dfff4d2



<br/><br/><br/><br/><br/>


### 제작 이유:

---

- 가끔 뭐 입어야 할지 고민하다 시간을 낭비하는 경우가 있음
- 자주 입는 것만 선택하게 됨
- 작년에 뭐를 입었는지 궁금함으로 시작
- 옷장에 있는 옷 다 꺼내서 보면 다시 정리하다 시간버림
  
<br/><br/><br/><br/><br/>
 
# 기술선정

| 사용 기술 | 이유 |
| --- | --- |
| next | 이미지 최적화 |
| TypeScript | 정적 타입 분석, 타입스크립트 숙련 |
| storybook | 시각적인 컴포넌트 유닛 테스트 가능 |
| redux | 상태관리를 각각의 컴포넌트가 아닌 하나의 파일에서 일괄적으로 관리하고 싶었음 https://npmtrends.com/jotai-vs-recoil-vs-redux-vs-zustand 리코일이 하락세이고 추후 지속적인 업데이트를 고려하기에 Redux를 선정 |
| tailwind | pre-rendering 시 styled-components의 style이 풀리는 문제 이는 styled-components가 서버사이드에서 적용이 되지않아서 발생 공식문서에서는 해결책을 제시했지만 사용하지않을것을 권장 → 해당 문제가 없고 많이 사용되는 테일윈드 사용  |
| node express | 미숙하지만 경험이 있고 프론트와 같은 언어라 선정 |
| mongoDB | 간단한 연결과 많은 쿼리사용예시가 존재 |



 <br/><br/><br/><br/><br/>

# 프로젝트 완료조건

- [x]  로그인/ 회원가입
- [x]  날씨 표현(현재기온, 최저기온, 최고기온, 습도, 강수확률, 하늘 상태)
- [x]  지도에서 지역 선택
- [x]  평균기온에 따른 아이템 추천
- [x]  평균기온에 따른 코디 추천
- [x]  추천 코디에서 선택을 통한 가중치 추가
- [x]  아이템 추가하기
- [x]  전체 아이템에서 조합 선택하기
- [x]  카테고리별 아이템 조회
- [x]  아이템 수정/삭제

 
 <br/><br/><br/><br/><br/>

 

 
# 비즈니스 로직
    - 1. 사용자가 입력한 옷 정보 저장하기
    - 2. 카카오맵으로 지역 선정하기
    - 3. 날씨 API로 현재 기온 확인하기
    - 4. 추천코디 선정하기 (가중치 생성)
    - 5. 추천코디 생성하기 ( 조합생성, 가중치 높을수록 우선 추천 )

## **1. 사용자가 입력한 옷 정보 저장하기**:

---

- 클라이언트 :
    - 사용자가 데이터{옷사진파일, 옷이름, 카테고리, 세부카테고리, 기온}입력 및 서버로 전달
    
    ```jsx
    //multipart/form-data
    {
      image: File,
      name: String,
      category: String,
      subcategory: String,
      temp: String
    }
    ```
    
- 서버:
    - 사용자가 전달한 옷사진파일을 s3에 업로드 이미지url 생성
    - 사용자가 전달한 데이터에 weight 객체를 추가 각 키값이 카테고리는 빈배열로 추가
    
    ```jsx
    {
      category: String,
      subcategory: String,
      temp: String,
      imgSrc: String,
      name: String,
      weight:{
       outer:[],
       top:[],
       inner:[],
       bottom:[],
      }
    }
    ```
    
     
    

## **2. 카카오맵으로 지역 선정하기:**

---

- 클라이언트:
    - **카카오맵 api를 통해 위치를 선정 위도 경도 가져오기**
    
    
![맵](https://github.com/Johyuncheol/outfit_weather/assets/51200912/7c70a8f3-93bd-47f0-9fd3-0febf67b072b)



## **3. 날씨 API로 현재 기온 확인하기**:

---

- 클라이언트:
    - 기상청 단기예보API를 사용 {최저기온, 최고기온, 현재기온, 습도, 강수확률, 하늘상태} 표시
        
        
        | POP | 강수확률 |
        | --- | --- |
        | PTY | 강수형태 |
        | REH | 습도 |
        | SKY | 하늘상태 |
        | TMN | 일 최저기온 |
        | TMX | 일 최고기온 |
    - 최저기온과 최고기온의 평균으로 평균기온을 생성 저장
    
![날씨](https://github.com/Johyuncheol/outfit_weather/assets/51200912/4cea4832-b383-4320-84b6-7afa4a16f6e9)


## **4. 추천코디 선정하기 (가중치 생성, ):**

---

- **클라이언트;
- 카테고리 : item id 형식의 데이터 객체 전달**

```jsx
{
   outer:**item id**값,
   top:**item id**값,
   inner:**item id**값,
   bottom:**item id**값,
  }
}
```

- 서버:
- 각 **item id에 해당하는 데이터를 찾아 weight 객체 속 해당하는 카테고리 배열에 추가 
첫 추가시 count=0;**

 ****

## **5. 추천코디 생성하기 ( 조합생성, 가중치 높을수록 우선 추천 )**:

---

- 서버:
    1. 상의카테고리(outer, top , inner)를 기준으로, 평균기온범위에 해당하는 아이템 찾음
    2. 기온에 맞는아이템을 기준으로 조합생성
    기준이 되는아이템이 겹치지않게 check 객체를 사용한 중복검사
    3. 찾은 데이터의 weight 가중치 객체(하위카테고리가 키, 값이 아이템 배열)에서 아이템의 count(같이 선정된 횟수) 가 높은 순으로 추출 
    4.  weight의 아이템보다 추출하는 데이터가 많다면 이후의 데이터는 해당 카테고리 가중치 배열에서 무작위로 추출 
    5. 가중치 객체에서 가져올 데이터가 없다면 해당 카테고리 아이템 전체에서 랜덤으로 가져옴 
    5. 조합 중복 확인 해서 아닐 때만 추가.
    

## **6. 추천 결과 반환하기**:

---

- 클라이언트 :
    - 추천된 코디나 옷 조합을 확인 및 선택.

