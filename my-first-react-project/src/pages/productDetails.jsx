import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const x = useParams();
  console.log(x.id);
  return (
    <>
      <h1>Product details {x.id}</h1>
    </>
  );
};
export default ProductDetails;
