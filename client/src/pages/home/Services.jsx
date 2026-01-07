import React from "react";

export default function Services() {
  return (
    <>
      <div className="text-white bg-(--navBg) p-2 py-5 md:p-10" id="services">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row gap-13 md:gap-30">
            <div>
              <button className="bg-(--signupBtnBg) text-2xl md:text-xl cursor-pointer rounded-full px-10 py-2">
                Services
              </button>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="text-3xl md:text-2xl">
                Expert Care for Every Fabric
              </h1>
              <p className="mt-4 text-s">
                From gentle dry cleaning to precise ironing and everyday wash &
                fold — Obi Laundry handles your clothes <br />
                with the care they deserve.
              </p>
            </div>
          </div>
        </div>
        {/* card section */}
        <section className="grid grid-cols-12 justify-center gap-5 mt-15 service card">
          <div className="col-span-12 w-full md:col-span-6 lg:col-span-4 lg:w-full flex flex-col items-center justify-center bg-(--cardBg) p-2 rounded-xl serviceCardOne">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/image 1.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div >
              <h1 className="py-4 text-3xl md:text-2xl">Wash & Fold</h1>
              <p className="text-xl md:text-sm">The ultimate time saver. We handle the washing, drying, and precise folding of your everyday clothes. They come back fresh, clean, and ready to go straight into your drawers.</p>
            </div>
          </div>

          <div className="col-span-12 w-full md:col-span-6 lg:col-span-4 lg:w-full flex flex-col items-center justify-center bg-(--cardBg) p-2 rounded-xl serviceCardOne">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/image 2.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div >
              <h1 className="py-4 text-3xl md:text-2xl">Dry Cleaning</h1>
              <p className="text-xl md:text-sm">Professional dry cleaning that keeps your clothes looking new. From delicate silks to sharp suits, every item gets premium treatment.</p>
            </div>
          </div>

           <div className="col-span-12 w-full md:col-span-6 lg:col-span-4 lg:w-full flex flex-col items-center justify-center bg-(--cardBg) p-2 rounded-xl serviceCardOne">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/image 3.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div >
              <h1 className="py-4 text-3xl md:text-2xl">Pickup & Delivery</h1>
              <p className="text-xl md:text-sm">Schedule pick-up online; we collect your items, process them with care, and deliver them back to your door at your chosen time. This service is included with all options below.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
