import { RemoveSessionStorage } from "@/util/HandleSessionStorage";

interface customFetchProps {
  endpoint: string;
  method: string;
  contentType?: string;
  data?: any;
}

export const customFetch = async ({
  endpoint,
  method = "GET",
  contentType = "application/json",
  data,
}: customFetchProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`;
  const options: RequestInit = {
    method,
    credentials: "include",
  };

  if (contentType === "multipart/form-data") {
    // multipart/form-data인 경우에는 빈 객체를 할당하여 바운더리를 자동 생성
    options.headers = {};
  } else {
    // 그렇지 않은 경우에는 Content-Type지정
    options.headers = {
      "Content-Type": contentType,
    };
  }

  if (data) {
    if (contentType.includes("form-data")) {
      options.body = data;
    } else options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        RemoveSessionStorage("nickname");
        /*  throw new Error("Unauthorized"); // 에러 */
      }

      /*       alert(result.message); */
      return 401;
    }

    if (options.method === "POST" || options.method === "PATCH")
      alert(result.message);

    return result.data;
  } catch (error) {
    throw error;
  }
};
