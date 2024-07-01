import React, { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-[calc(100vh-120px)] flex">
      <aside className="bg-white min-h-full w-full max-w-[320px] shadow-md p-4">
        <div className="h-32 bg-blue-500 flex flex-col items-center justify-center text-white mb-4">
          <div className="text-5xl cursor-pointer mb-2">
            <FaUserAlt />
          </div>
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <p className="text-sm">{user?.role}</p>
        </div>
        {/* Navigation */}
        <nav className="grid gap-2">
          <Link to="all-users" className="px-2 py-1 hover:bg-slate-100 rounded">
            All Users
          </Link>
          <Link
            to="all-products"
            className="px-2 py-1 hover:bg-slate-100 rounded"
          >
            All Products
          </Link>
        </nav>
      </aside>
      <main className="w-full h-full flex-grow p-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <p className="capitalize">
          Welcome to the admin panel, {user ? user.name : "User"}!
        </p>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
