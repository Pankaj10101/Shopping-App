import React, { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import "./Home.scss";
import Products from "../Products/Products";
import Category from "./Category/Category";
import { fetchDataFromApi } from "../../store/api";
import { Context } from "../../store/context";
const Home = () => {
  const { categories, setCategories } = useContext(Context);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res.data);
      setCategories(res)
    });
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories = {categories} />
          <Products headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
