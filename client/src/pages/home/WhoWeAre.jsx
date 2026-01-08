import React from "react";

export default function WhoWeAre() {
  return (
    <>
      <div className="bg-(--landingPgBg) px-4 py-10 md:p-10 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text section */}
            <div className="w-full md:w-[45%]">
              <button className="bg-(--signupBtnBg) text-base md:text-xl cursor-pointer px-6 md:px-10 py-2 rounded-full">
                Who Are We
              </button>

              <h1 className="text-xl md:text-2xl py-6">
                Reclaiming Your Time with <br />
                Professional Laundry <br />
                Solutions
              </h1>

              <p className="text-sm md:text-base">
                We started Obiwan Laundry with one simple mission: to end the
                endless chore of laundry. We understand that your time is
                valuable, and laundry day shouldn't consume your evenings and
                weekends.
              </p>
            </div>

            {/* Image section */}
            <div className="w-full md:w-[45%]">
              <img
                src="/Rectangle 1.png"
                alt=""
                className="w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}