import React from "react";

export default function HowItWorks() {
  return (
    <>
      <div className="bg-(--landingPgBg) p-2 py-10 md:p-10 text-white">
        <div className="container mx-auto">
          <div className="md:flex flex-col items-center justify-center">
            <div className="">
              <button className="bg-(--signupBtnBg) text-xl md:text-xl cursor-pointer px-5  md:px-10 py-2 rounded-full">
                How It Works
              </button>
            </div>
            <span className="md:text-center">
              {" "}
              <h1 className="text-3xl md:text-2xl py-6">
                Expert Care for Every Fabric
              </h1>
              <p className="text-sm md:text-center">
                From gentle dry cleaning to precise ironing and everyday wash &
                fold — Obi Laundry handles your{" "}
                <br className="hidden md:block" /> clothes with the care they
                deserve.
              </p>
            </span>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-23 py-10">
            <div className="md:flex flex-col items-center justify-center">
              <img src="/calendar-svgrepo-com (2).png" alt="calender" />
              <div>
                <h1 className="md:text-center text-2xl py-4">
                  Schedule Your Service
                </h1>
                <p className="md:text-center text-sm">
                  Use our platform or app to select your service (Wash & Fold,
                  Dry Cleaning, etc.) and choose a convenient pick-up and
                  delivery time.
                </p>
              </div>
            </div>

            <div className="md:flex flex-col items-center justify-center">
              <img src="/shield-keyhole-minimalistic-svgrepo-com.png" alt="shield" />
              <div>
                <h1 className="md:text-center text-2xl py-4">We Clean & Care</h1>
                <p className="md:text-center text-sm">
                  Our team collects your items, pre-treats stains, and cleans
                  your garments using professional, eco-friendly methods.
                  Everything is carefully folded and packaged.
                </p>
              </div>
            </div>

            <div className="md:flex flex-col items-center">
              <img src="/delivery-svgrepo-com.png" alt="delivery" />
              <div>
                <h1 className="md:text-center text-2xl py-4">We Deliver</h1>
                <p className="text-sm">
                  We deliver your fresh, clean, and neatly packaged laundry
                  right back to your door. Laundry done!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}