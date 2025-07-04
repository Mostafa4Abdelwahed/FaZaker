import FloatingAlert from "../molecules/FloatingAlert";
import Hero from "../organisms/HeroSection";
import CategoriesSection from "../organisms/CategoriesSection";
import FloatingAlertData from "../organisms/FloatingAlertData";
import PodcastsSection from "../organisms/PodcastsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <PodcastsSection title="عن الدين" />
      <PodcastsSection title="دروس دينية" />
      <PodcastsSection title="المشاهدة أكثر" />
      {/* <FloatingAlertData /> */}
    </>
  )
}
