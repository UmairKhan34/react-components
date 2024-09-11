import { Outlet } from "react-router-dom";

const UserAuth = () => {
  return (
    <>
      <h1>User auth </h1>
      <Outlet />
    </>
  );
};
export default UserAuth;
