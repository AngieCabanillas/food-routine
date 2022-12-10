import axiosClient from "../api/clientAxios";

const api = axiosClient.getUri();

const urlApi = `${api}/categories.php`;

export const getCategories = async () => {
  return await axiosClient.get(urlApi);
};
