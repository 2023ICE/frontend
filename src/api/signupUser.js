import { Axios } from './Axios';

export const signupUser = async (formData) => {
  try {
    const response = await Axios.post(
      `http://3.38.247.55:8080//api/auth/sign-up`,
      JSON.stringify(formData),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
