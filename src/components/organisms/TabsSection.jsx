import Button from "../atoms/Button"

function TabsSection() {
  return (
    <div className="flex items-center flex-wrap gap-5">
      <Button type="outline" aria-checked={true} className="aria-checked:!bg-main aria-checked:text-white border-2 font-semibold !rounded-2xl">الكل</Button>
      <Button type="outline" className="border-2 font-semibold !rounded-2xl">ايه المشكلة</Button>
      <Button type="outline" className="border-2 font-semibold !rounded-2xl">مدرك</Button>
      <Button type="outline" className="border-2 font-semibold !rounded-2xl">أنسان</Button>
      <Button type="outline" className="border-2 font-semibold !rounded-2xl">فنجان</Button>
    </div>
  )
}

export default TabsSection
