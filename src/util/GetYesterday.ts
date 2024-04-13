export const GetYesterday = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1); // 현재 날짜에서 하루를 빼서 어제 날짜를 가져옴

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDateNumber = parseInt(`${year}${month}${day}`);

  return formattedDateNumber;
};
