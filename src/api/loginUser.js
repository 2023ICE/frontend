import { Axios } from './Axios';

export const loginUser = async (formData) => {
  try {
    const response = await Axios.post(
      `http://3.38.247.55:8080/api/auth/sign-in`,
      JSON.stringify(formData),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
