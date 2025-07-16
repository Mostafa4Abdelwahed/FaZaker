import Image from "next/image"
import Button from "../atoms/Button"
import Link from "next/link"

function CategoryCard({ name, image, href, className="" }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden min-h-[395px] ${className}`}>
      <Image src={image} className="absolute inset-0 object-cover h-full" draggable={false} alt="Thumbnail" />
      <div className="w-full h-full bg-gradient-to-t from-black to-transparent z-10 absolute" />
      <Link href={href} className="absolute bottom-0 w-full p-2 z-50">
        <Button className="w-full cursor-pointer">{name}</Button>
      </Link>
    </div>
  )
}

export default CategoryCard
