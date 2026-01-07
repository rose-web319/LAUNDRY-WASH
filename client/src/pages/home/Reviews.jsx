import React from "react";

export default function Reviews() {
  return (
    <>
      <div className="text-white bg-(--landingPgBg) p-2 py-10 md:p-10 ">
        <div className="container mx-auto">
          <div className="md:flex flex-col items-center justify-center">
            <span>
              <h1 className="text-3xl">What Our Customers Say About Us</h1>
            </span>
            <span className="md:text-center">
              <p className="text-l md:text-center mt-1">
                Real experiences from people who trust us with their clothes
                every week
              </p>
            </span>
          </div>
          <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 py-15">
            <div className="bd-(cardBg) hhh rounded-tl-[35px] rounded-tr-[35px] rounded-br-[40px] rounded-bl-[40px] cursor-pointer">
              <div className="p-5 text-sm bg-(--cardBg) rounded-tr-[30px] rounded-tl-[30px] rounded-br-[30px]">
                <span className="flex gap-3 pb-3">
                  <img src="/rating.png" alt="" />
                  <span>4/5</span>
                </span>
                <p>The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s easier for customers to navigate. </p>
              </div>
              <div className="bg-(--signupBtnBg) rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px] p-2">
                <span className="p-2">
                  <div className="flex px-2 gap-3">
                    <img src="/user_profile.png" alt="" />
                    <div>
                      <h2 className="text-xl font-medium">Maxin Will</h2>
                      <p className="text-sm">Product Manager</p>
                    </div>
                  </div>
                </span>
              </div>
            </div>

            <div className="bd-(cardBg) hhh rounded-tl-[35px] rounded-tr-[35px] rounded-br-[40px] rounded-bl-[40px] cursor-pointer">
              <div className="p-5 text-sm bg-(--cardBg) rounded-tr-[30px] rounded-tl-[30px] rounded-br-[30px]">
                <span className="flex gap-3 pb-3">
                  <img src="/rating.png" alt="" />
                  <span>4/5</span>
                </span>
                <p>The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s easier for customers to navigate. </p>
              </div>
              <div className="bg-(--signupBtnBg) rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px] p-2">
                <span className="p-2">
                  <div className="flex px-2 gap-3">
                    <img src="/user_profile.png" alt="" />
                    <div>
                      <h2 className="text-xl font-medium">Maxin Will</h2>
                      <p className="text-sm">Product Manager</p>
                    </div>
                  </div>
                </span>
              </div>
            </div>

            <div className="bd-(cardBg) hhh rounded-tl-[35px] rounded-tr-[35px] rounded-br-[40px] rounded-bl-[40px] cursor-pointer">
              <div className="p-5 text-sm bg-(--cardBg) rounded-tr-[30px] rounded-tl-[30px] rounded-br-[30px]">
                <span className="flex gap-3 pb-3">
                  <img src="/rating.png" alt="" />
                  <span>4/5</span>
                </span>
                <p>The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s easier for customers to navigate. </p>
              </div>
              <div className="bg-(--signupBtnBg) rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px] p-2">
                <span className="p-2">
                  <div className="flex px-2 gap-3">
                    <img src="/user_profile.png" alt="" />
                    <div>
                      <h2 className="text-xl font-medium">Maxin Will</h2>
                      <p className="text-sm">Product Manager</p>
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
