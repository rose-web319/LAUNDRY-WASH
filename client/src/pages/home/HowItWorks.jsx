import React from "react";

export default function HowItWorks() {
  return (
    <>
      <div className="text-white bg-(--landingPgBg) p-2 py-10 md:p-10">
        <div className="container mx-auto">
          <div className="md:flex flex-col items-center justify-center">
            <div>
              <button className="bg-(--signupBtnBg) text-2xl md:text-xl cursor-pointer px-10 py-2 rounded-full">
                How it works
              </button>
            </div>
            <span className="md:text-center">
              {""}
              <h1 className="text-3xl md:text-2xl py-6">
                Expert Care for Every Fabric
              </h1>
              <p className="text-xs md:text-center">
                From gentle dry cleaning to precise ironing and everyday wash &
                fold — Obi Laundry handles your{" "}
                <br className="hidden md:block" />
                clothes with the care they deserve.
              </p>
            </span>
          </div>
        </div>
        {/* card section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 md:gap-23 py-10">
          <div className="md:flex flex-col items-center justify-center">
            <img src="/calendar-svgrepo-com (2).png" alt="calendar" />
            <div>
              <h1 className="md:text-center text-2xl py-4">
                Schedule Your Service
              </h1>
              <p className="md:text-center text-xl md:text-sm">
                Use our platform or app to select your service (Wash & Fold, Dry
                Cleaning, etc.) and choose a convenient pick-up and delivery
                time.
              </p>
            </div>
          </div>

          <div className="md:flex flex-col items-center justify-center">
            <img src="/shield-keyhole-minimalistic-svgrepo-com.png" alt="shield" />
            <div>
              <h1 className="md:text-center text-2xl py-4">
                We clean & care
              </h1>
              <p className="md:text-center text-xl md:text-sm">
                Our team collects your items, pre-treats stains, and cleans your garments using professional, eco-friendly methods. Everything is carefully folded and packaged.
              </p>
            </div>
          </div>

          <div className="md:flex flex-col items-center justify-center">
            <img src="/delivery-svgrepo-com.png" alt="delivery" />
            <div>
              <h1 className="md:text-center text-2xl py-4">
               We deliver
              </h1>
              <p className="md:text-center text-xl md:text-sm">
                We deliver your fresh, clean, and neatly packaged laundry right back to your door. Laundry done!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
