import Image from "next/image"
import Link from "next/link"

function PodcastCard({ image, href }) {

    return (
        <div className="relative rounded-3xl overflow-hidden w-full h-[300px]">
            <Link href={href}>
                <Image src={image} className="absolute inset-0 w-full h-full object-cover" draggable={false} alt="Thumbnail" />
                <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent z-50" />
            </Link>
        </div>
    )
}

export default PodcastCard
