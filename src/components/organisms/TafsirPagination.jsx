import { Icon } from "@iconify/react";
import Button from "../atoms/Button";

function TafsirPagination({ currentTafsir, setCurrentTafsir, totalAyahs }) {
  return (
    <div className="flex items-center justify-between flex-wrap max-w-2xl w-full mx-auto mt-14">
      <Button disabled={currentTafsir === 1} onClick={()=>setCurrentTafsir(currentTafsir - 1)} type="outline" className="disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-xl px-16">
        <Icon icon={"solar:round-arrow-right-bold"} className="text-xl" />
        الأية السابقة
      </Button>
      <Button disabled={currentTafsir === totalAyahs} onClick={()=>setCurrentTafsir(currentTafsir + 1)} type="outline" className="disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-xl px-16">
        الأية التالية
        <Icon icon={"solar:round-arrow-left-bold"} className="text-xl" />
      </Button>
    </div>
  );
}

export default TafsirPagination;
