import Container from "../atoms/Container";
import TitleOfSura from "../atoms/TitleOfSura";
import DisplayQuranText from "../molecules/DisplayQuranText";

export default async function SingleQuran({ id }) {
  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/en/${id}.json`,
    { cache: "force-cache" }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return (
    <Container className="py-7">
      <TitleOfSura name={data?.name} />
      <DisplayQuranText data={data} />
    </Container>
  );
}
