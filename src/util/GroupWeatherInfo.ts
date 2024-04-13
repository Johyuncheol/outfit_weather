export const GroupWeatherInfo = ({ data }: any) => {
  // fcstDate을 기준으로 그룹화된 데이터를 담을 객체 생성
  const groupedData: { [key: string]: any[] } = {};

  // 원하는 카테고리 목록
  const desiredCategories = ["POP", "PTY", "PCP", "SKY", "TMP", "TMN", "TMX", "REH", "WSD"];

  // 데이터 그룹화
  data.forEach((item: any) => {
    const { fcstDate, category } = item;
    if (desiredCategories.includes(category)) {
      groupedData[fcstDate] = groupedData[fcstDate] || [];
      groupedData[fcstDate].push(item);
    }
  });

 
  return groupedData;
};
