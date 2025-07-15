import Container from "../atoms/Container";
import PodcastVideoCard from "../molecules/PodcastVideoCard";
import HeroFavoritesSection from "../organisms/HeroFavoritesSection";
import Quote from "../organisms/Quote";
import Thumbnail from "@/assets/thumbnail_podcast.jpg"

export default function Favorites() {
  return (
    <Container>
      <HeroFavoritesSection />
      <Quote />
      <div className="w-full max-w-2xl mx-auto my-20">
      <PodcastVideoCard className="!h-[360px]" image={Thumbnail} href={"/podcasts/id"} category="ايه المشكلة" title="لو مبتصليش؟" />
      </div>
    </Container>
  )
}
