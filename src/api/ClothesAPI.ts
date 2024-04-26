import { customFetch } from "./const";

export const AddClothesAPI = async ({ data }: { data: FormData }) => {
  const endpoint = "user/clothes/add";
  const method = "POST";
  const contentType = "multipart/form-data";
  const response = await customFetch({ endpoint, method, contentType, data });
  return response;
};

export const getClothesAPI = async ({
  category = "all",
}: {
  category?: string;
}) => {
  const endpoint = `user/clothes/get?category=${category}`;
  const method = "GET";

  const response = await customFetch({ endpoint, method });
  return response;
};

export const getClothesNavAPI = async (temp: number) => {
  const endpoint = `user/clothes/get/nav?temp=${temp}`;
  const method = "GET";

  const response = await customFetch({ endpoint, method });
  return response;
};

export const getRecommendAPI = async (temp: number) => {
  const endpoint = `user/clothes/recommend?temp=${temp}`;
  const method = "GET";

  const response = await customFetch({ endpoint, method });
  return response;
};

export const selectAPI = async (data: object) => {
  const endpoint = `user/clothes/select`;
  const method = "POST";

  const response = await customFetch({ endpoint, method, data });
  return response;
};
