export const AddLocalStorage = (key: string, data: any) => {
  // 서버 측에서 실행되는 경우
  if (typeof window === "undefined") {
    return null;
  }
  localStorage.setItem(key, JSON.stringify(data));
};

export const GetLocalStorage = (key: string) => {
  // 서버 측에서 실행되는 경우
  if (typeof window === "undefined") {
    return null;
  }
  const item = localStorage.getItem(key);
  return item !== null ? JSON.parse(item) : null;
};

export const RemoveLocalStorage = (key: string) => {
  // 서버 측에서 실행되는 경우
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(key);
};