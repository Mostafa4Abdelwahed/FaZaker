import Container from "../atoms/Container";
import DatePrayer from "../molecules/DatePrayer";
import HeroPrayerSection from "../organisms/HeroPrayerSection";
import PrayerCardsSection from "../organisms/PrayerCardsSection";

export default function PrayerTimes() {
  return (
    <Container>
      <HeroPrayerSection />
      <DatePrayer />
      <PrayerCardsSection />
    </Container>
  )
}
