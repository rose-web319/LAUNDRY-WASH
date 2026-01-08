import React from "react";
import { Link } from "react-router";

export default function Effort() {
  return (
    <>
      <div className="bg-(--navBg) text-white">
        <div
          className="flex flex-col-reverse py-10 md:py-0 md:flex-row md:items-center gap-5"
        >
    
          <div className="w-full md:w-[50%]">
            <img src="/Rectangle 10.png" alt="" className="w-full" />
          </div>


          <div className="p-2 md:p-0 w-full md:w-[30%] flex flex-col">
            <h1 className="text-2xl md:text-5xl">
              Laundry Made <br className="hidden md:flex" /> Effortless
            </h1>

            <p className="text-sm md:text-base py-4">
              Fresh, clean, perfectly folded—right <br className="hidden md:flex" /> when you need it.
            </p>

          
            <div className="flex justify-center md:justify-start">
              <Link to="book-laundry" className="bg-(--signupBtnBg) md:w-full text-center text-sm md:text-sm cursor-pointer px-10 py-4 rounded-full">
                Book laundry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}