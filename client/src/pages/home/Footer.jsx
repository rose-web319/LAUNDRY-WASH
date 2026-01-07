import Logo from "@/components/Logo"
import { Link } from "react-router"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <>
     <div className="bg-(--navBg) text-white">
    <div className="container mx-auto py-5">
      <div className="flex  text-center md:flex-row gap-5 justify-between items-center w-[85%]">
        <Logo/>
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>Contact Us</Link>
      </div>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-[75%] gap-5 mt-10">
        <span>
          <h3 className="text-gray-400 text-sm">CONTACT</h3>
          <p className="text-xs">+1 891 989-11-91</p>
        </span>

        <span>
          <h3 className="text-gray-400 text-sm">Email</h3>
          <p className="text-xs">info@obiwanlaundry.com</p>
        </span>

        <span>
          <h3 className="text-gray-400 text-sm">Address</h3>
          <p className="text-xs">2972 Westheimer Rd. Santa Ana, Agege Motor Road</p>
        </span>
      </section>
      <div className="relative">
        <a href="#home" className="fixed bottom-17 right-10 bg-(--signupBtnBg) p-2 rounded-full">
          <ArrowUp/>
        </a>
      </div>
      <hr className="text-(--signupBtnBg) mt-5"/>
      <div className="mt-3 text-white">
        <span className="text-xs text-gray-400">&copy-copyright</span>
      </div>
    </div>
    </div>
    </>
   
  )
}
