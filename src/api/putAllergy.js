import { Axios } from './Axios';

export const putAllergy = async (selectedAllergy) => {
  try {
    const response = await Axios.put(
      'http://3.38.247.55:8080/api/allergy',
      JSON.stringify({ allergies: selectedAllergy }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzAxNTgxNjU0LCJleHAiOjE3MDE2MTc2NTR9.UE9neg58RkTfFDKZ6kzOx1s3wQMTN9hwpi6RDGEcDys`,
        },
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};
