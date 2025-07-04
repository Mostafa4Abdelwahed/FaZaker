import FloatingAlert from "../molecules/FloatingAlert";
import Hero from "../molecules/Hero";
import CategoriesSection from "../organisms/CategoriesSection";
import FloatingAlertData from "../organisms/FloatingAlertData";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import PodcastsSection from "../organisms/PodcastsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <PodcastsSection title="عن الدين" />
      <PodcastsSection title="دروس دينية" />
      <PodcastsSection title="المشاهدة أكثر" />
      <Footer />
      {/* <FloatingAlertData /> */}
    </>
  )
}
