import { Outlet } from "react-router";
import LogoTwo from "../components/LogoTwo";

export default function Authlayout() {
  return (
    <>
      <section className="grid grid-cols-12 items-center justify-center h-screen w-full bg-(--landingPgBg)">
        <div
          className="hidden md:block col-span-6 h-screen w-full bg-cover bg-center p-5"
          style={{ backgroundImage: "url('/image 9.png')" }}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-center">
              <LogoTwo />
            </div>
            <div className="backdrop-blur-xs bg-white/0 border border-white/30 rounded-xl py-6 px-6 hidden lg:flex items-center gap-5">
              <div className="flex w-[24%]">
                <div className="flex items-center gap-2">
                  <img src="/Ellipse 5.png" alt="" />
                  <div className="flex flex-col text-xs space-y-1">
                    <p className="font-semibold text-white">Zoe Saldana</p>
                    <p className="text-white">Galaxy Guardian</p>
                  </div>
                </div>
              </div>
              <div className="w-[70%]">
                <h1 className="font-bold text-white ">
                  A lifesaver for my busy schedule
                </h1>
                <p className="text-xs mt-2 w-full text-white">
                  I drop my clothes in the morning and pick them up perfectly
                  folded by evening. Everything smells fresh, and not a single
                  sock goes missing. Honestly, this service has saved me hours
                  every week.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 px-2">
          <div className="flex justify-center">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
