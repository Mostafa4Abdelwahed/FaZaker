import { Icon } from "@iconify/react"

function PrayerCard({ name="", icon="", time="", isActive=false }) {
  return (
    <div aria-checked={isActive} className="flex items-center justify-between font-medium aria-checked:bg-main aria-checked:text-white text-gray-400 bg-white text-xl border border-gray-300/65 w-full py-3 px-5 rounded-xl">
      <div className="flex items-center gap-2.5">
        <Icon icon={icon} />
        <span>{name}</span>
      </div>
      <span>{time}</span>
    </div>
  )
}

export default PrayerCard
