"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "motion/react";
import Button from "../atoms/Button";
import Link from "next/link";

function QuranCard({ verse }) {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div
        onClick={() => setActive(!active)}
        className="flex items-center justify-between border-2 border-main group hover:bg-main-100 hover:border-transparent transition-all rounded-xl px-6 py-2"
      >
        <div className="flex items-center gap-4">
          <QuranIcon id={verse.id} className="group-hover:text-main" />
          <div>
            <h1 className="font-bold text-lg text-main group-hover:text-white">
              سورة {verse.name}
            </h1>
            <span className="text-sm text-main-100 font-medium group-hover:font-light group-hover:text-white">
              {verse.type === "meccan" ? "مكية" : "مدنية"} - عدد أياتها{" "}
              {verse.total_verses.toLocaleString("ar-EG")}
            </span>
          </div>
        </div>
        <Icon
          icon={"solar:square-alt-arrow-down-linear"}
          className="text-3xl text-main group-hover:text-white"
        />
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0, padding: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12, padding: 10 }}
            exit={{ opacity: 0, height: 0, marginTop: 0, padding: 0 }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <Link className="max-w-sm w-full" href={`/quran/${verse.id}/read`}><Button className="w-full">القرأءة</Button></Link>
            <Link className="max-w-sm w-full" href={`/quran/${verse.id}/listen`}><Button type="outline" className="w-full">الأستماع</Button></Link>
            <Button className="max-w-sm w-full border-0" type="outline">التفسير</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const QuranIcon = ({ id, className = "" }) => {
  return (
    <div className={`w-6 h-6 relative text-white ${className}`}>
      <div className="w-full h-full bg-main group-hover:bg-white" />
      <div className="bg-main group-hover:bg-white rotate-45 absolute inset-0" />
      <span className="inset-0 absolute w-full h-full leading-6 text-center">
        {id.toLocaleString("ar-EG")}
      </span>
    </div>
  );
};

export default QuranCard;
