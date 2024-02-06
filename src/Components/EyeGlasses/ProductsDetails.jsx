/* eslint-disable no-unused-vars */
import { useState } from "react";
import ProductDetails from "./Components/productDetail";
import { ProductList } from "./Components/ProductList";
import { Link } from "react-router-dom";

export const ProductsDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <>
      <Link to={"/ProductDetail"}>
        {selectedProduct ? (
          <ProductDetails product={selectedProduct} />
        ) : (
          <>
            <ProductList onProductClick={handleProductClick} />
          </>
        )}
      </Link>
    </>
  );
};
