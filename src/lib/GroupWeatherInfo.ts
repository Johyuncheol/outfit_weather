export const GroupWeatherInfo = ({ data }: any) => {

  const extractedDataArray = data.filter((item: { category: string }) => {
    return (
      item.category === "POP" ||
      item.category === "PTY" ||
      item.category === "PCP" ||
      item.category === "SKY" ||
      item.category === "TMP" ||
      item.category === "TMN" ||
      item.category === "TMX" ||
      item.category === "REH" ||
      item.category === "WSD"
    );
  });

  // fcstTime을 기준으로 그룹화된 데이터를 담을 객체 생성
  const groupedData: { [key: string]: any[] } = {};

  // extractedDataArray를 fcstTime으로 그룹화
  extractedDataArray.forEach((item: any) => {
    const { fcstDate } = item;
    if (!groupedData[fcstDate]) {
      groupedData[fcstDate] = [];
    }
    groupedData[fcstDate].push(item);
  });

  return groupedData;
};
