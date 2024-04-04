
import { Navigate } from "react-router-dom";
import { getLink, routs } from "./routs.js";

// @ts-ignore
const ProtectedRoute = ({ children }) => {
  // const user = useSelector(selectLoggedInUser)
  const user = JSON.parse(localStorage.getItem("user"));
  // const user = selectLoggedInUser(selectLoggedInUser)

  if (!user) {
    return <Navigate to={getLink(routs.MuiSignIn)} />;
  }

  return children;
};

export default ProtectedRoute;
