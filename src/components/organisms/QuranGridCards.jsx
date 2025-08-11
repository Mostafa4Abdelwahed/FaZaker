import QuranCard from "./QuranCard";

async function QuranGridCards() {
  const res = await fetch(
    "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json",
    { cache: "force-cache" }
  );
  const quran = await res.json();
  return (
    <div className="w-full md:w-xl space-y-4 mx-auto mb-16">
      {quran?.map((verse, index) => {
        return <QuranCard key={index} verse={verse} />;
      })}
    </div>
  );
}

export default QuranGridCards;
