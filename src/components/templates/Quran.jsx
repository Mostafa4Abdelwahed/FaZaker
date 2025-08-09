import Container from "../atoms/Container";
import HeroQuranSection from "../organisms/HeroQuranSection";
import QuranGridCards from "../organisms/QuranGridCards";

export default function Quran() {
  return (
    <Container>
      <HeroQuranSection />
      <QuranGridCards />
    </Container>
  )
}
