export default function Services() {
  return (
    <>
      <div className="bg-(--navBg) p-2 py-5 md:p-10" id="services">
        <div className="container mx-auto text-white">
          <div className="flex flex-col md:flex-row gap-13 md:gap-30">
            <div>
              <button className="bg-(--signupBtnBg) text-xl cursor-pointer px-5 md:px-10 py-2 rounded-full">
                Services
              </button>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="text-2xl">Expert Care for Every Fabric</h1>
              <p className="mt-4 text-sm md:text-xl">
                From gentle dry cleaning to precise ironing and everyday wash &
                fold — Obi Laundry handles your clothes with the care they
                deserve.
              </p>
            </div>
          </div>
        </div>
        {/* card section for service starts from here */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-15 text-white">
          {/* first box */}
          <div className="bg-(--cardBg) p-2 rounded-xl w-full">
            <div className="flex items-center justify-center ">
              <img
                src="/image 1.png"
                alt="wash"
                className="w-full transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div>
              <h1 className="py-4 text-2xl">Wash & Fold</h1>
              <p className="text-sm">
                The ultimate time saver. We handle the washing, drying, and
                precise folding of your everyday clothes. They come back fresh,
                clean, and ready to go straight into your drawers.
              </p>
            </div>
          </div>
          {/* second box */}
          <div className="bg-(--cardBg) p-2 rounded-xl">
            <div className="">
              <img
                src="/image 2.png"
                alt="wash"
                className="w-full transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div>
              <h1 className="py-4 text-2xl">Dry Cleaning</h1>
              <p className="text-sm">
                Professional dry cleaning that keeps your clothes looking new.
                From delicate silks to sharp suits, every item gets premium
                treatment.
              </p>
            </div>
          </div>
          {/* third box */}
          <div className="bg-(--cardBg) p-2 rounded-xl">
            <div className="">
              <img
                src="/image 3.png"
                alt="wash"
                className="w-full transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div>
              <h1 className="py-4 text-2xl">Pickup & Delivery</h1>
              <p className="text-sm">
                Schedule pick-up online; we collect your items, process them
                with care, and deliver them back to your door at your chosen
                time. This service is included with all options below.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

{
  /* <section className="grid grid-cols-12 justify-center gap-5 mt-15 text-white serviceCard">
          <div className="col-span-12 w-full md:col-span-6 lg:col-span-4 lg:w-full flex flex-col items-center justify-center bg-(--cardBg) p-2 rounded-xl serviceCardOne">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/wash.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div>
              <h1 className="py-4 text-3xl md:text-2xl">Wash & Fold</h1>
              <p className="text-xl md:text-sm">
                The ultimate time saver. We handle the washing, drying, and
                precise folding of your everyday clothes. They come back fresh,
                clean, and ready to go straight into your drawers.
              </p>
            </div>
          </div>
          <div className="col-span-12 w-full md:col-span-6 lg:col-span-4 lg:w-full flex flex-col items-center justify-center bg-(--cardBg) p-2 rounded-xl serviceCardOne">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/dry cleaning.png"
                alt=""
                className="w-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div>
              <h1 className="py-4 text-3xl md:text-2xl">Dry Cleaning</h1>
              <p className="text-xl md:text-sm">
                Professional dry cleaning that keeps your clothes looking new.
                From delicate silks to sharp suits, every item gets premium
                treatment.
              </p>
            </div>
          </div>
          <div className="col-span-12 w-full md:col-span-6 lg:col-span-4 lg:w-full flex flex-col items-center justify-center bg-(--cardBg) p-2 rounded-xl serviceCardOne">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/pickup.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div>
              <h1 className="py-4 text-3xl md:text-2xl">Pickup & Delivery</h1>
              <p className="text-xl md:text-sm">
                Schedule pick-up online; we collect your items, process them
                with care, and deliver them back to your door at your chosen
                time. This service is included with all options below.
              </p>
            </div>
          </div>
        </section> */
}