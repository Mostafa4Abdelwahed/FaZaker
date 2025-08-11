"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Thumbnail from "@/assets/categories/AwkatElsalah.jpg";

function AudioPlayer({ sura, activeReciter }) {
  const suraLink =
    activeReciter?.moshaf[0].server +
    String(sura?.id).padStart(3, "0") +
    ".mp3";

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleTogglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(suraLink);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(suraLink);
    audioRef.current.play();
    setIsPlaying(false);

    audioRef.current.onended = () => {
      setIsPlaying(false);
    };

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [suraLink]);

  return (
    <div className="max-w-3xl mx-auto">
      <card className="bg-white w-full mt-7 flex flex-wrap justify-start items-center gap-y-5 p-3 relative shadow-sm rounded-xl">
        <Image
          src={Thumbnail}
          alt="Reciter"
          width={400}
          height={400}
          className="rounded-xl lg:w-[170px] h-[170px] w-full object-cover"
        />
        <p className="px-9 text-2xl font-semibold grow">
          {activeReciter?.name || "---- ---- ----"}
          <br />
          <span className="text-lg font-normal">{sura?.name ? `سورة ${sura?.name}` : "---- ---- ----"}</span>
        </p>

        <span
          onClick={handleTogglePlay}
          className="clear-left rounded-full bg-[#eff0f9] p-4 mx-5 cursor-pointer group [&_*]:transition-all [&_*]:duration-150 [&_*]:ease-in"
        >
          <span className="px-3 py-3 block bg-white rounded-full shadow-md group-hover:bg-main-100">
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-main stroke-main group-hover:fill-white group-hover:stroke-white"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-main stroke-main group-hover:fill-white group-hover:stroke-white"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 4v16l13 -8z" />
              </svg>
            )}
          </span>
        </span>
      </card>
    </div>
  );
}

export default AudioPlayer;