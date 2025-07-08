import PrayerCard from "../molecules/PrayerCard"

function PrayerCardsSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 my-8">
      <PrayerCard isActive={false} name="الفجر" icon="solar:moon-sleep-linear" time="٤:٢٨ ص" />
      <PrayerCard isActive={false} name="الشروق" icon="solar:sun-fog-linear" time="٥:٥٥ ص" />
      <PrayerCard isActive={false} name="الظهر" icon="si:sun-duotone" time="١٢:٠٢ م" />
      <PrayerCard isActive={false} name="العصر" icon="solar:sun-outline" time="٣:٣٠ م" />
      <PrayerCard isActive={false} name="المغرب" icon="solar:cloud-sun-outline" time="٤:٢٨ ص" />
      <PrayerCard isActive={true} name="العشاء" icon="solar:moon-fog-linear" time="٤:٢٨ ص" />
    </div>
  )
}

export default PrayerCardsSection
