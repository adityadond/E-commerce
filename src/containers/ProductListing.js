import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import {setProducts} from "../redux/actions/productActions"

function ProductListing() {
  const products = useSelector((state) => state);
  console.log("Products:",products);
  const dispatch=useDispatch()

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
      console.log(response.data,"response");
      dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts()
  }, []);
  
  return (
    <div className="ui grid container">
        
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
