import { Icon } from "@iconify/react"

function DatePrayer() {
  return (
    <div className="flex items-center justify-center gap-7">
      <div><Icon icon={"carbon:next-filled"} className="text-4xl text-main cursor-pointer" /></div>
      <h1 className="font-bold text-main text-2xl"> ٢٠- ٤ - ٢٠٢٥</h1>
      <div><Icon icon={"carbon:previous-filled"} className="text-4xl text-main cursor-pointer" /></div>
    </div>
  )
}

export default DatePrayer
