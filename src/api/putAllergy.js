import { Axios } from './Axios';

export const putAllergy = async (selectedAllergy, accessToken) => {
  try {
    const response = await Axios.put(
      'http://3.38.247.55:8080/api/allergy',
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
