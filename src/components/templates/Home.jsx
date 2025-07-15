import Hero from "../organisms/HeroSection";
import CategoriesSection from "../organisms/CategoriesSection";
import PodcastsSection from "../organisms/PodcastsSection";
import Container from "../atoms/Container";

export default function Home() {
  return (
    <Container>
      <Hero />
      <CategoriesSection />
      <PodcastsSection title="عن الدين" />
      <PodcastsSection title="دروس دينية" />
      <PodcastsSection title="المشاهدة أكثر" />
    </Container>
  )
}
