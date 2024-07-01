import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common/index.js";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("Please check password and confirm password");
    }
  };

  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full border-4 border-blue-500 hover:border-red-600 transition-colors">
            <CgProfile
              style={{ color: "blue", fontSize: "48px" }}
              className="profile-icon"
            />
          </div>

          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="flex justify-between mb-4">
              <Link
                to="/login"
                className={`p-2 rounded-lg bg-gray-200 text-gray-700`}
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className={`p-2 rounded-lg bg-blue-500 text-white`}
              >
                Sign Up
              </Link>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                name="name"
                value={data.name}
                onChange={handleOnChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="password">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span
                    className="cursor-pointer"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <IoEyeOff /> : <IoEye />}
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="confirm-password">
                Confirm Password:
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span
                    className="cursor-pointer"
                    onClick={handleToggleConfirmPassword}
                  >
                    {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-blue-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg w-full transition-colors duration-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
