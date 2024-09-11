import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/products";
import ProductDetails from "./pages/productDetails";
import ErrorPages from "./pages/ErrorPages";
import UserAuth from "./pages/UserAuth";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import XYZ from "./components/Layout";
import ABC from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <ABC>
              <XYZ>
                <Home></Home>
              </XYZ>
            </ABC>
          }
        />
        <Route
          path="products"
          element={
            <ABC>
              <XYZ>
                <Product />
              </XYZ>
            </ABC>
          }
        />
        <Route path="product-details/:id?" element={<ProductDetails />} />
        <Route path="user-auth" element={<UserAuth />}>
          <Route
            index
            element={
              <>
                <h1>Index Route for user route</h1>
              </>
            }
          ></Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </>
  );
};
export default App;
