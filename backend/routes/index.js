const express = require("express");

const router = express.Router();

const userSignUpController = require("../controllers/user/userSignUp");
const userSignInController = require("../controllers/user/userSignIn");
const userDetailsController = require("../controllers/user/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controllers/user/userLogout");
const allUsers = require("../controllers/user/allUsers");
const updateUser = require("../controllers/user/updateUser");
const UploadProductController = require("../controllers/product/uploadProduct");
const getProductController = require("../controllers/product/getProduct");
const updateProductController = require("../controllers/product/updateProduct");
const getCategoryProduct = require("../controllers/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controllers/product/getCategoryWiseProduct");
const getProductDetails = require("../controllers/product/getProductDetails");
const addToCartController = require("../controllers/user/addToCartController");
const countAddToCartProduct = require("../controllers/user/countAddToCartProduct");
const addToCartViewProduct = require("../controllers/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controllers/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controllers/user/deleteAddToCartProduct");
const searchProduct = require("../controllers/product/searchProduct");
const filterProductController = require("../controllers/product/filterProduct");

router.route("/signup").post(userSignUpController);
router.route("/signin").post(userSignInController);
router.route("/user-details").get(authToken, userDetailsController);
router.route("/userLogout").get(userLogout);

// admin panel
router.route("/all-user").get(authToken, allUsers);
router.route("/update-user").post(authToken, updateUser);

// product
router.route("/upload-product").post(authToken, UploadProductController);
router.route("/get-product").get(getProductController);
router.route("/update-product").post(authToken, updateProductController);
router.route("/get-categoryProduct").get(getCategoryProduct);
router.route("/category-product").post(getCategoryWiseProduct);
router.route("/product-details").post(getProductDetails);
router.route("/search").get(searchProduct);
router.route("/filter-product").post(filterProductController);

// add to cart
router.route("/addtocart").post(authToken, addToCartController);
router.route("/countAddToCartProduct").get(authToken, countAddToCartProduct);
router.route("/view-card-product").get(authToken, addToCartViewProduct);
router.route("/update-cart-product").post(authToken, updateAddToCartProduct);
router.route("/delete-cart-product").post(authToken, deleteAddToCartProduct);

module.exports = router;
