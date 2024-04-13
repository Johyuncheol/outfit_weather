export const AddSessionStorage = (key: string, data: any) => {
  // 서버 측에서 실행되는 경우
  if (typeof window === "undefined") {
    return null;
  }
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const GetSessionStorage = (key: string) => {
  // 서버 측에서 실행되는 경우
  if (typeof window === "undefined") {
    return null;
  }
  const item = sessionStorage.getItem(key);
  return item !== null ? JSON.parse(item) : null;
};

export const RemoveSessionStorage = (key: string) => {
  // 서버 측에서 실행되는 경우
  if (typeof window === "undefined") {
    return;
  }
  sessionStorage.removeItem(key);
};
