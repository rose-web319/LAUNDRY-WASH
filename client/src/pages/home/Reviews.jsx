import React from "react";

export default function Reviews() {
  return (
    <>
      <div className="bg-(--landingPgBg) p-4 py-10 md:p-10 lg:p-16 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <span>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                What Our Customers Say About Us
              </h1>
            </span>
            <span className="mt-2">
              <p className="text-xs md:text-sm lg:text-base max-w-xl">
                Real experiences from people who trust us with their clothes
                every week.
              </p>
            </span>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 py-10 reviewBox">
            <div className="bg-(--cardBg) cardGradient rounded-tl-[35px] rounded-tr-[35px] rounded-br-[40px] rounded-bl-[40px] cursor-pointer">
              <div className="p-5 text-xs md:text-sm bg-(--cardBg) rounded-tr-[30px] rounded-tl-[30px] rounded-br-[30px]">
                <span className="flex items-center gap-3 pb-3">
                  <img src="/rating.png" alt="" className="w-16 h-auto" />
                  <span>4/5</span>
                </span>
                <p>
                  The team took time to understand our vision and delivered a
                  sleek, professional site that not only looks great but also
                  improved our conversion rates. Their design process was
                  smooth, communication was clear, and they met all deadlines.
                  We’ve received numerous compliments on the new site, and it’s
                  easier for customers to navigate.
                </p>
              </div>
              <div className="bg-(--signupBtnBg) rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px] p-3">
                <span className="p-2">
                  <div className="flex items-center px-2 gap-3">
                    <img src="/user_profile.png" alt="" className="w-10 h-10" />
                    <div>
                      <h2 className="text-lg md:text-xl font-medium">
                        Maxin Will
                      </h2>
                      <p className="text-xs md:text-sm">Product Manager</p>
                    </div>
                  </div>
                </span>
              </div>
            </div>

         

            <div className="bg-(--cardBg) cardGradient rounded-tl-[35px] rounded-tr-[35px] rounded-br-[40px] rounded-bl-[40px] cursor-pointer">
              <div className="p-5 text-xs md:text-sm bg-(--cardBg) rounded-tr-[30px] rounded-tl-[30px] rounded-br-[30px]">
                <span className="flex items-center gap-3 pb-3">
                  <img src="/rating.png" alt="" className="w-16 h-auto" />
                  <span>4/5</span>
                </span>
                <p>
                  The team took time to understand our vision and delivered a
                  sleek, professional site that not only looks great but also
                  improved our conversion rates. Their design process was
                  smooth, communication was clear, and they met all deadlines.
                  We’ve received numerous compliments on the new site, and it’s
                  easier for customers to navigate.
                </p>
              </div>
              <div className="bg-(--signupBtnBg) rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px] p-3">
                <span className="p-2">
                  <div className="flex items-center px-2 gap-3">
                    <img src="/user_profile.png" alt="" className="w-10 h-10" />
                    <div>
                      <h2 className="text-lg md:text-xl font-medium">
                        Maxin Will
                      </h2>
                      <p className="text-xs md:text-sm">Product Manager</p>
                    </div>
                  </div>
                </span>
              </div>
            </div>

            <div className="bg-(--cardBg) cardGradient rounded-tl-[35px] rounded-tr-[35px] rounded-br-[40px] rounded-bl-[40px] cursor-pointer">
              <div className="p-5 text-xs md:text-sm bg-(--cardBg) rounded-tr-[30px] rounded-tl-[30px] rounded-br-[30px]">
                <span className="flex items-center gap-3 pb-3">
                  <img src="/rating.png" alt="" className="w-16 h-auto" />
                  <span>4/5</span>
                </span>
                <p>
                  The team took time to understand our vision and delivered a
                  sleek, professional site that not only looks great but also
                  improved our conversion rates. Their design process was
                  smooth, communication was clear, and they met all deadlines.
                  We’ve received numerous compliments on the new site, and it’s
                  easier for customers to navigate.
                </p>
              </div>
              <div className="bg-(--signupBtnBg) rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px] p-3">
                <span className="p-2">
                  <div className="flex items-center px-2 gap-3">
                    <img src="/user_profile.png" alt="" className="w-10 h-10" />
                    <div>
                      <h2 className="text-lg md:text-xl font-medium">
                        Maxin Will
                      </h2>
                      <p className="text-xs md:text-sm">Product Manager</p>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}