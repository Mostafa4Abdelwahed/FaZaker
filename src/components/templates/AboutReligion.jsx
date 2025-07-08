import Container from "../atoms/Container";
import PodcastsCards from "../organisms/PodcastsCards";
import TabsSection from "../organisms/TabsSection";

export default function AboutReligion() {
  return (
    <Container className="py-7">
      <TabsSection />
      <PodcastsCards />
    </Container>
  )
}
