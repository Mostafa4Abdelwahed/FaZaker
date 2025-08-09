import { Icon } from "@iconify/react";

function QuranCard() {
  return (
    <div className="flex items-center justify-between border-2 border-main rounded-xl px-6 py-2">
      <div className="flex items-center gap-4">
        <QuranIcon />
        <div>
          <h1 className="font-bold text-lg text-main">سورة الفاتحة</h1>
          <span className="text-sm text-main-100 font-medium">
            مكية - عدد أياتها ٧
          </span>
        </div>
      </div>
      <Icon
        icon={"solar:square-alt-arrow-down-linear"}
        className="text-3xl text-main"
      />
    </div>
  );
}

const QuranIcon = () => {
  return (
    <div className="w-6 h-6 relative">
      <div className="w-full h-full bg-main" />
      <div className="bg-main rotate-45 absolute inset-0" />
      <span className="inset-0 absolute w-full h-full leading-6 text-center text-white">
        1
      </span>
    </div>
  );
};

export default QuranCard;
