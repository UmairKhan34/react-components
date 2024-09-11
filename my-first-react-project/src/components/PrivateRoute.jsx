import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLoggedIn = true;
  return (
    <>{isLoggedIn ? props.children : <Navigate to={"/user-auth/login"} />}</>
  );
};
export default PrivateRoute;
