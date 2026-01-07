import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { useAuth } from "@/hooks/useAuth";
import Drawer from "./Drawer";
import UserAvatar from "./UserAvatar";

export default function Nav() {
  const { user, handleLogout } = useAuth();
  return (
    <>
      <div className="bg-(--navBg) fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container mx-auto px-2 md:px-auto py-4 flex items-center justify-between">
          {/* LOGO */}
          <Logo />

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:block space-x-10 text-white">
            <a href="#services">Services</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            {user && (
              <NavLink
                to="/book-laundry"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(98, 85, 236)" : "white",
                  textDecoration: "none",
                })}
              >
                Book Laundry
              </NavLink>
            )}
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <UserAvatar />
            ) : (
              /* AUTH BUTTONS (Desktop Only) */
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  className="bg-(--signupBtnBg) rounded-full px-3 py-2 md:px-6 md:py-2 text-white"
                  to="/signup"
                >
                  Sign Up
                </Link>
                <Link
                  className="text-(--signupBtnBg) border border-(--signupBtnBg) px-3 py-2 md:px-6 md:py-2 rounded-full"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            )}

            <div className="block lg:hidden">
              <Drawer handleLogout={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}