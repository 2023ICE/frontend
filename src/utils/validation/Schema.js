import * as yup from 'yup';
import Messages from './Messages';

const schema = yup.object().shape({
  username: yup.string().matches(/^[A-Za-z0-9+_.-]+@(.+)$/, Messages.USER_NAME), //이메일
  password: yup //비밀번호
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      Messages.PASSWORD
    ),
  checkedPassword: yup // 비밀번호 확인
    .string()
    .oneOf([yup.ref('password')], Messages.CHECKED_PASSWORD),
  name: yup // 이름
    .string()
    .required(Messages.NAME)
    .min(2, Messages.NAME)
    .max(4, Messages.NAME),
});
