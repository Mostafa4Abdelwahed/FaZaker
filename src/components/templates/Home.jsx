import Hero from "../molecules/Hero";
import CategoriesSection from "../organisms/CategoriesSection";
import Navbar from "../organisms/Navbar";
import PodcastsSection from "../organisms/PodcastsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <PodcastsSection />
    </>
  )
}
