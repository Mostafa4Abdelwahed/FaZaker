import Hero from "../molecules/Hero";
import CategoriesSection from "../organisms/CategoriesSection";
import Navbar from "../organisms/Navbar";
import Podcasts from "../organisms/Podcasts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <Podcasts />
    </>
  )
}
