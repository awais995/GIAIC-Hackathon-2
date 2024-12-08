import AboutUs from "@/components/Aboutus";
import FoodCategory from "@/components/FoodCategory";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Whyus from "@/components/Whyus";

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
