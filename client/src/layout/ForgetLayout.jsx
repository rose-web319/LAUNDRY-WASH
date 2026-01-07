import { Link } from "react-router";
import React from "react";
import { Outlet } from "react-router";

export default function ForgetLayout() {
  return (
    <>
      <div className="flex items-center justify-center mt-3">
        <Link to="/">
          <img src="/LogoTwo.png" alt="" />
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
