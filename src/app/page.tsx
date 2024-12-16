import AboutUs from "@/app/components/Aboutus";
import FoodCategory from "@/app/components/FoodCategory";
import Hero from "@/app/components/Hero";
import Menu from "@/app/components/Menu";
import Whyus from "@/app/components/Whyus";
import Experience from "./components/Experience/Experience";
import OurChefs from "./components/Chefs";
import TestimonialsSection from "./components/Testimonials";
import LatestBlog from "./components/latestblogs";


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <FoodCategory />
      <Whyus />
      <Experience />
      <Menu />
      <OurChefs />
      <TestimonialsSection />
      <LatestBlog />
    </div>
  );
}
