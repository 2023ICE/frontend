import { Axios } from './Axios';

export const getAllergy = async (accessToken) => {
  try {
    const response = await Axios.get('/api/allergy', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};
