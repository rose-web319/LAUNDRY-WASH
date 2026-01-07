import { useAuth } from "@/hooks/useAuth";
import { ChevronDown, Lock, LogOut, User, Notebook } from "lucide-react";
import { Link } from "react-router";

export default function UserAvatar() {
  const { user, handleLogout } = useAuth();
  return (
    <div className="flex items-center gap-2">
      <div className="avatar avatar-placeholder">
        <div className="text-white w-12 md:w-14 rounded-full bg-black">
          {user?.avatar ? (
            <img src={user?.avatar} alt={user?.fullname} loading="lazy" />
          ) : (
            <span className="text-xl md:text-3xl">
              {user?.fullname
                ?.split(" ")
                .map((name) => name[0])
                .join("")
                .toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* FULL DROPDOWN ONLY ON DESKTOP */}
      <div className="hidden md:block dropdown dropdown-end text-white">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost capitalize p-1"
        >
          {user?.fullname} <ChevronDown />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-(--navBg)  w-52 p-2 shadow-sm text-white rounded-lg"
        >
          <li>
            <Link to="/profile">
              <div className="flex gap-2 items-center">
                <User />
                <span>Profile</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/book-laundry">
              <div className="flex gap-2 items-center">
                <Notebook />
                <span>Book Laundry</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <div className="flex gap-2 items-center">
                <Lock />
                <span>Admin</span>
              </div>
            </Link>
          </li>
          <li>
            <div
              className="flex gap-2 items-center"
              role="button"
              aria-label="logout button"
              onClick={handleLogout}
            >
              <LogOut />
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}