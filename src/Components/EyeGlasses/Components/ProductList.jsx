import { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import {Product} from "./Product";
export const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    
        axios.get("/product.json")
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, []);

 console.log(product);

  return (
    <>
      <div className="grid justify-evenly grid-cols-3">
        {product?.map((card) => (
          <Product
            id={card.id}
            key={card.id}
            image={card.imageUrl}
            name={card.name}
            size={card.size}
            star={card.star}
            review={card.review}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
};
