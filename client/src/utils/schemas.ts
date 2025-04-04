import * as Yup from "yup";

const regex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("Adınızı giriniz"),
  lastName: Yup.string().required("Soyadınızı giriniz"),
  email: Yup.string()
    .email("Geçersiz email adresi")
    .required("Email adresinizi giriniz"),
  password: Yup.string()
    .required("Şifrenizi giriniz")
    .matches(regex, "Güçlü bir şifre giriniz"),
});

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçersiz email adresi")
    .required("Email adresinizi giriniz"),
  password: Yup.string().required("Şifrenizi giriniz"),
});

export { registerSchema, loginSchema };
