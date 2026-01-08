import { Link } from "react-router";
import Logo from "../../components/Logo";
import { ArrowUp } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import LogoThree from "@/components/LogoThree";

export default function Footer() {
  const { user } = useAuth();
  return (
    <>
      <div className="bg-(--navBg) text-white">
        <div className="container mx-auto py-5">
          <div className="flex flex-col text-center md:flex-row gap-5 justify-between items-center md:w-[85%]">
            {user ? <LogoThree /> : <Logo />}
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Contact Us</Link>
          </div>
          <section className="flex flex-col flex-wrap md:flex-row md:justify-between md:w-[80%] text-center md:text-start gap-5 mt-12 px-5 md:px-0">
            <span>
              <h3 className="text-gray-400 text-sm">CONTACT</h3>
              <p className="text-xs">+1 891 989-11-91</p>
            </span>
            <span>
              <h3 className="text-gray-400 text-sm">EMAIL</h3>
              <p className="text-xs">info@obiwanlaundry.com</p>
            </span>
            <span>
              <h3 className="text-gray-400 text-sm">ADDRESS</h3>
              <p className="text-xs">
                2972 Westheimer Rd. Santa Ana, Agege Motor Road
              </p>
            </span>
          </section>
          <div className="relative">
            <a
              href="#home"
              className="fixed bottom-1 right-8 z-1000 bg-(--signupBtnBg) p-2 rounded-full"
            >
              <ArrowUp />
            </a>
          </div>
          <hr className="text-(--signupBtnBg) mt-5" />
          <div className="mt-3 text-white px-5 md:px-0">
            <span className="text-xs text-gray-400">&copy-copyright</span>
          </div>
        </div>
      </div>
    </>
  );
}