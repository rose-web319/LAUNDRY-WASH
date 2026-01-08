import { Link } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  return (
    <>
      <div className="bg-(--landingPgBg) mt-20" id="home">
        <div className="flex flex-col items-center justify-center gap-10 p-10">
          <div>
            <h1 className="text-start md:text-center text-2xl md:text-4xl text-white">
              Quick. Clean. Delivered.
            </h1>
            <p className="text-start md:text-center text-sm md:text-xl mt-3 text-white">
              Laundry Wash helps you save time with fast, reliable pickup and
              delivery service. <br className="hidden md:block" /> Because you
              deserve clean clothes without the wait.
            </p>
            <div className="flex flex-row gap-1 md:gap-0 items-center justify-center space-x-1 md:space-x-1 py-6">
              <Link
                to="/book-laundry"
                className="bg-(--signupBtnBg) rounded-full px-6 py-2 text-white w-auto text-center"
              >
                Book Laundry
              </Link>
              {!user && (
                <Link
                  className="text-(--signupBtnBg) border border-(--signupBtnBg) px-6 py-2 rounded-full w-auto text-center"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div>
            <img src="/Frame 30.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}