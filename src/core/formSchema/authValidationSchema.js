import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  username: Yup.string().required("Field Required"),
  password: Yup.string().required("Field Required"),
});
