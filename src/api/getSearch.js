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
    console.log(page);
    return response.data.result;
  } catch (error) {
    console.log(error);
    console.log(page);
    return error;
  }
};
