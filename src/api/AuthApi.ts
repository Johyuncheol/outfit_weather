import { customFetch } from "./const";

interface LoginProps {
  id: string;
  password: string;
}

export const loginAPI = async (data: LoginProps) => {
  const endpoint = "auth/login";
  const method = "POST";

  const response = await customFetch({ endpoint, method, data });
  return response.username;
};

interface RegisterProps {
  id: string;
  password: string;
  username: string;
}
export const RegisterAPI = async (data: RegisterProps) => {
  const endpoint = "auth/register";
  const method = "POST";
  await customFetch({ endpoint, method, data });
};

export const isloginAPI = async () => {
  const endpoint = "user/islogin";
  const method = "GET";

  const response = await customFetch({ endpoint, method });
  return response;
};
