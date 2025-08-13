"use client";
import { memo, useEffect, useState } from "react";
import Container from "../atoms/Container";
import DisplayTafsir from "../organisms/DisplayTafsir";
import HeroTafsirSection from "../organisms/HeroTafsirSection";
import TafsirPagination from "../organisms/TafsirPagination";

function SingleQuranTafsir({ id }) {
  const [currentTafsir, setCurrentTafsir] = useState(1);
  const [tafsir, setTafsir] = useState([]);
  const [ayahs, setAyahs] = useState([]);
  const [tafsirAudio, setTafsirAudio] = useState("");

  const fetchTafsir = async () => {
    const res = await fetch(
      `https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/ar-tafsir-muyassar/${id}.json`
    );
    const data = await res.json();

    const resAyah = await fetch(
      `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/en/${id}.json`
    );
    const ayahs = await resAyah.json();

    setAyahs(ayahs.verses);
    setTafsir(data.ayahs);
  };

  const fetchTafsirAudio = async () => {
    const res = await fetch(
      `https://www.mp3quran.net/api/v3/tafsir?tafsir=${id}&language=ar`
    );
    const data = await res.json();
    const filterd = data.tafasir.soar.find(
      (sura) => sura.sura_id === Number(id)
    );
    setTafsirAudio(filterd.url);
  };

  useEffect(() => {
    fetchTafsir();
    fetchTafsirAudio();
  }, [currentTafsir]);

  return (
    <Container>
      <HeroTafsirSection />
      <DisplayTafsir
        ayah={ayahs[currentTafsir - 1]?.text}
        tafsir={tafsir[currentTafsir - 1]?.text}
      />
      <TafsirPagination
        currentTafsir={currentTafsir}
        setCurrentTafsir={setCurrentTafsir}
        totalAyahs={ayahs.length}
      />

      {tafsirAudio && (
        <div className="my-20">
          <h1 className="text-2xl text-center text-main font-semibold">
            سماع التفسير كامل
          </h1>
          <audio className="mx-auto max-w-2xl w-full mt-4" controls>
            <source src={tafsirAudio} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </Container>
  );
}

export default memo(SingleQuranTafsir);
