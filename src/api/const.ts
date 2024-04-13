// fetch를 사용하여 API 요청을 보내는 함수
export const customFetch = async (
  endpoint: string,
  method: string = "GET",
  data?: any
) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`;
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (!response.ok) {
      alert(result.message);
      return;
    }
    return result.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};
