import AboutUs from "@/app/components/Aboutus";
import FoodCategory from "@/app/components/FoodCategory";
import Hero from "@/app/components/Hero";
import Menu from "@/app/components/Menu";
import Whyus from "@/app/components/Whyus";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <FoodCategory />
      <Whyus />
      <Menu />
    </div>
  );
}
