import { Icon } from "@iconify/react";

function ReciterList({ activeReciter, setActiveReciter, reciter }) {
  return (
    <button
      onClick={() => setActiveReciter(reciter)}
      type="outline"
      aria-checked={activeReciter.id === reciter.id}
      className="flex items-center gap-4 cursor-pointer px-4 aria-checked:text-main text-xl py-3 border-b border-b-gray-300/50 w-full"
    >
      {activeReciter.id === reciter.id ? (
        <Icon className="text-main" icon={"solar:check-square-bold"} />
      ) : (
        <Icon icon={"solar:check-square-outline"} />
      )}
      {reciter.name}
    </button>
  );
}

export default ReciterList;
