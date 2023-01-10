import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Informe seu nome!"),
  email: yup.string().email("E-mail inválido!").required("Informe o e-mail"),
  password: yup
    .string()
    .min(6, "A senha deve ter ao menos 6 dígitos!")
    .required("Informe sua senha"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "A senha digitada não confere!"),
});
