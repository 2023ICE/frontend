import * as yup from 'yup';
import Messages from './Messages';

export const login_schema = yup.object().shape({
  username: yup
    .string()
    .required(Messages.USER_NAME_REQUIRED) //이메일
    .matches(/^[A-Za-z0-9+_.-]+@(.+)$/, Messages.USER_NAME),
  password: yup //비밀번호
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      Messages.PASSWORD
    ),
});

export const signup_schema = yup.object().shape({
  username: yup
    .string()
    .required(Messages.USER_NAME_REQUIRED) //이메일
    .matches(/^[A-Za-z0-9+_.-]+@(.+)$/, Messages.USER_NAME),
  password: yup //비밀번호
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      Messages.PASSWORD
    ),
  checkedPassword: yup // 비밀번호 확인
    .string()
    .required(Messages.CHECKED_PASSWORD)
    .oneOf([yup.ref('password')], Messages.CHECKED_PASSWORD),
  name: yup // 이름
    .string()
    .required(Messages.NAME_MIN)
    .min(2, Messages.NAME_MIN)
    .max(4, Messages.NAME_MAX),
});
