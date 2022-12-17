import axiosClient from "../api/clientAxios";

const api = axiosClient.getUri();

const urlApi = `${api}/filter.php?c=`;

export const getRecipes = async (category: string) => {
  return await axiosClient.get(`${urlApi}${category}`);
};
