import { Axios } from './Axios';

export const getSearch = async (accessToken, recipeName, page) => {
  try {
    const response = await Axios.get(`/api/allergy/check`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      params: { page: `${page}`, recipeName: `${recipeName}` },
    });
    return response.data.result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
