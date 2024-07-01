import React from "react";
import CategoryList from "../component/CategoryList";
import BannerProduct from "../component/BannerProduct";
import HorizontalCardProduct from "../component/HorizontalCardProduct";
import VerticalCardProduct from "../component/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct
        category={"lproducts"}
        heading={"Latest Lighting Products"}
      />
      <HorizontalCardProduct category={"abs"} heading={"Top's ABS"} />
      <HorizontalCardProduct
        category={"rvm"}
        heading={"Rear View Mirror (R.V.M)"}
      />
      <VerticalCardProduct
        category={"erelay"}
        heading={"Electronic Relays"}
      />
      <VerticalCardProduct
        category={"relay"}
        heading={"Relays"}
      />
    </div>
  );
};

export default Home;
