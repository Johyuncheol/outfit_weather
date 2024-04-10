export const GetBaseTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  // 시간을 두 자리 숫자로 변환
  const formattedHour = String(currentHour).padStart(2, "0");

  // 분을 항상 "00"으로 설정
  const formattedMinute = "00";

  // 현재 시간을 "HHMM" 형식의 문자열.
  const currentTimeString = `${formattedHour}${formattedMinute}`;

  return currentTimeString;
};
