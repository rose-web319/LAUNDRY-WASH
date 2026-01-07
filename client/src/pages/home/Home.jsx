import { Link } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
    const { user } = useAuth();
  return (
    <>
      <div className="bg-(--landingPgBg) py-30 pb-5">
        <div className="flex container mx-auto  flex-col items-center justify-center gap-10 ">
          <div className="w-full">
            <h1 className="text-white text-start text-4xl md:text-center">
              Quick. Clean. Deliver
            </h1>
            <p className="text-white text-start text-xl mt-3 md:text-center">
              Laundry Wash helps yoy save time with fast, reliable pickup and
              delivery service. <br className="hidden md:block" />
              Because you deserve clean clothes without the wait.
            </p>
            <div className=" flex justify-center items-center gap-1 mt-4">
              <Link className="bg-(--signupBtnBg) text-white rounded-full px-7 py-2">
                Book Laundry
              </Link>
              {!user && (
                <Link className="text-(--signupBtnBg)  border border-(----signupBtnBg) rounded-full px-7 py-2"
                >
                  Log in
                </Link>
              )}
            </div>
            <div className="w-full mt-10">
              <img src="/Frame 30.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
