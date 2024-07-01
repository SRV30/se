import React, { useEffect, useState } from "react";
import SummaryApi from "../common/index.js";
import { Link } from "react-router-dom";
import productCategory from "../helpers/productCategory";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.categoryProduct.url);
      const dataResponse = await response.json();
      const updatedCategoryProduct = dataResponse.data.map((product) => {
        const category = productCategory.find(
          (cat) => cat.value === product.category
        );
        return {
          ...product,
          label: category ? category.label : product.category,
        };
      });
      setCategoryProduct(updatedCategoryProduct);
    } catch (error) {
      console.error("Failed to fetch category products", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-4 justify-between overflow-x-auto scrollbar-none">
        {loading
          ? categoryLoading.map((_, index) => (
              <div
                className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse"
                key={"categoryLoading" + index}
              ></div>
            ))
          : categoryProduct.map((product, index) => (
              <Link
                to={"/product-category?category=" + product?.category}
                className="cursor-pointer"
                key={product?.category}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                  <img
                    src={product?.productImage[0]}
                    alt={product?.category}
                    className="h-full w-full object-contain mix-blend-multiply hover:scale-125 transition-all"
                  />
                </div>
                <p className="text-center text-sm md:text-base capitalize mt-2">
                  {product?.label}
                </p>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default CategoryList;
