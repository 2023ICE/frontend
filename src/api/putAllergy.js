import { Axios } from './Axios';

export const putAllergy = async (selectedAllergy, accessToken) => {
  try {
    const response = await Axios.put(
      '/api/allergy',
      JSON.stringify({ allergies: selectedAllergy }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};
