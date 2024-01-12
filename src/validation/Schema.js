import * as yup from "yup";

const Messages = {
  EMAIL: "이메일 형식이 유효하지 않습니다.",
  EMAIL_REQUIRED: "이메일을 입력해주세요.",
  PASSWORD:
    "영문과 숫자, 특수기호(@$!%*#?&)를 조합하여 8자 이상, 24자 이하로 입력하여 주세요.",
  PASSWORD_REQUIRED: "비밀번호를 입력해주세요.",
  CHECKED_PASSWORD: "비밀번호가 일치하지 않습니다.",
  NAME_MIN: "이름은 2자 이상으로 입력해주세요.",
  NAME_MAX: "이름은 4자 이하로 입력해주세요.",
};

export const login_schema = yup.object().shape({
  email: yup
    .string()
    .required(Messages.EMAIL_REQUIRED)
    .matches(/^[A-Za-z0-9+_.-]+@(.+)$/, Messages.EMAIL),
  password: yup
    .string()
    .required(Messages.PASSWORD_REQUIRED)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/,
      Messages.PASSWORD,
    ),
});

export const signup_schema = yup.object().shape({
  email: yup
    .string()
    .required(Messages.EMAIL_REQUIRED)
    .matches(/^[A-Za-z0-9+_.-]+@(.+)$/, Messages.EMAIL),
  password: yup //비밀번호
    .string()
    .required(Messages.PASSWORD_REQUIRED)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/,
      Messages.PASSWORD,
    ),
  checkPwd: yup // 비밀번호 확인
    .string()
    .required(Messages.CHECKED_PASSWORD)
    .oneOf([yup.ref("password")], Messages.CHECKED_PASSWORD),
  username: yup // 이름
    .string()
    .required(Messages.NAME_MIN)
    .min(2, Messages.NAME_MIN)
    .max(4, Messages.NAME_MAX),
});
