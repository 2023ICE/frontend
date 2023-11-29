import { Axios } from './Axios';

export const getSearch = async (accessToken, recipeName) => {
  try {
    const response = await Axios.get(`/api/allergy/check`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      params: { page: 1, recipeName: `${recipeName}` },
    });
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
