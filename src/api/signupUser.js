import { Axios } from './Axios';

export const signupUser = async (formData) => {
  try {
    const response = await Axios.post(
      `/api/auth/sign-up`,
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
