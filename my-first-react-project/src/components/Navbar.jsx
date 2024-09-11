import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <h1
        style={{
          backgroundColor: "red",
        }}
      >
        Nav Bar
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/user-auth/login">Login</NavLink>
      </h1>
    </>
  );
};

export default Navbar;
