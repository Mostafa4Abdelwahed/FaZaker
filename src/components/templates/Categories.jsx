import Container from "../atoms/Container";
import CategoriesCards from "../organisms/CategoriesCards";
import HeroCategoriesSection from "../organisms/HeroCategoriesSection";

export default function Categories() {
  return (
    <Container className="py-7">
      <HeroCategoriesSection />
      <CategoriesCards />
    </Container>
  )
}
