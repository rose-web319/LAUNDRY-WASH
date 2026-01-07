import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Services from "@/pages/home/Services";
import HowItWorks from "@/pages/home/HowItWorks";
import WhoWeAre from "@/pages/home/WhoWeAre";
import Reviews from "@/pages/home/Reviews";
import Effort from "@/pages/home/Effort";
import Footer from "@/pages/home/Footer";

export default function Rootlayout() {
  return <>
  <Nav/>
  <Outlet/>
  <Services/>
  <HowItWorks/>
  <WhoWeAre/>
  <Reviews/>
  <Effort/>
  <Footer/>
  </>;
}
