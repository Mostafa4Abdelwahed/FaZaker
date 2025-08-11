"use client";
import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import DisplayQuranText from "../molecules/DisplayQuranText";
import Dropdown from "../molecules/Dropdown";
import AudioPlayer from "../organisms/AudioPlayer";
import HeroSingleQuranListen from "../organisms/HeroSingleQuranListen";
import ReciterList from "../atoms/ReciterList";

export default function SingleQuranListen({ id }) {
  const [sura, setSura] = useState(null);
  const [data, setData] = useState(null);
  const [activeReciter, setActiveReciter] = useState(null);

  const fetchData = async () => {
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/en/${id}.json`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    setSura(data);
  };
  const getAudio = async () => {
    const res = await fetch(`https://mp3quran.net/api/v3/reciters?sura=${id}`);
    const data = await res.json();
    console.log({ dataPlayer: data.reciters });
    setData(data.reciters);
    if (activeReciter === null) setActiveReciter(data.reciters[0]);
  };

  useEffect(() => {
    fetchData();
    getAudio();
  }, [id, activeReciter]);

  return (
    <Container className="py-10">
      <HeroSingleQuranListen />
      <Dropdown className="!p-0" size="max-w-3xl !mx-auto">
        {data?.map((reciter, index) => (
          <ReciterList
            key={index}
            activeReciter={activeReciter}
            setActiveReciter={setActiveReciter}
            reciter={reciter}
          />
        ))}
      </Dropdown>
      <AudioPlayer sura={sura} activeReciter={activeReciter} />
      <DisplayQuranText className="my-16" data={sura} />
    </Container>
  );
}
