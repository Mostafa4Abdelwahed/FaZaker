import Link from "next/link"

function HeaderSection({ title="", href="" }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-3xl">{title}</h1>
      <Link className="font-medium text-xl text-main" href={href}>الكل</Link>
    </div>
  )
}

export default HeaderSection
