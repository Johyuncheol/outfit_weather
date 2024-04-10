export const GetToday = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 두 자리 숫자로 변환
  const day = String(currentDate.getDate()).padStart(2, "0"); // 일을 두 자리 숫자로 변환

  const formattedDateNumber = parseInt(`${year}${month}${day}`);

  return formattedDateNumber;
};
