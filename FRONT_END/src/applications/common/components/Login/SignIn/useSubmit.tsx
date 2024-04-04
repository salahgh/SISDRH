import useLogin from "./useLogin";
import { FormikHelpers, FormikValues } from "formik";

import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLink, routs } from "../../../../../routing/routs.tsx";
import { setUser } from "../../../../../redux/features/auth/userSlice.ts";

export const useSubmit = () => {
  const { handleAuthenticate } = useLogin();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<any>,
  ) => {
    const { setSubmitting } = formikHelpers;
    setSubmitting(true);
    handleAuthenticate(values)
      .then((result) => {
        if (result?.error) {
          setSubmitting(false);
          enqueueSnackbar(JSON.stringify(result.error), { variant: "error" });
        } else {
          dispatch(setUser(result.data));
          localStorage.setItem("user", JSON.stringify(result.data));
          setSubmitting(false);
          enqueueSnackbar("تم تسجيل الدخول بنجاح", { variant: "success" });
          // const token = result.data.token;
          // const decodedToken = jwtDecode(token);
          // console.log(result)
          // console.log(decodedToken)
          // console.log(Date.now())
          // console.log(formatTime(decodedToken.iat * 1000))
          // console.log(formatTime(decodedToken.exp * 1000))
          navigate(getLink(routs.ApplicationChoice));
        }
      })

  };

  return {
    handleSubmit,
  };
};
