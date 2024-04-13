import { customFetch } from "./const";

interface LoginProps {
  id: string;
  password: string;
}

export const loginAPI = async (data: LoginProps) => {
  const response = await customFetch(`auth/login`, "POST", data);
  return response.nickname;
};

interface RegisterProps {
  id: string;
  password: string;
  nickname: string;
}
export const RegisterAPI = async (data: RegisterProps) => {
  await customFetch(`auth/register`, "POST", data);
};
