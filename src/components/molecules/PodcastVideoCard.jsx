import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

function PodcastVideoCard({ image, href, category = "", title = "" }) {
    return (
        <div>
            <div className="relative rounded-3xl overflow-hidden w-full h-[250px]">
                <div>
                    <Image src={image} className="absolute inset-0 w-full h-full object-cover" draggable={false} alt="Thumbnail" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent z-50">
                        <Link className="absolute -translate-y-[50%] top-[50%] right-[50%] translate-x-[50%] p-5" href={href}>
                            <Icon icon={"proicons:play-circle"} className="text-5xl text-main-100" />
                        </Link>
                        <div className="flex flex-col absolute top-3 right-3 space-y-2.5">
                            <button className="cursor-pointer"><Icon icon={"solar:heart-angle-bold"} className="text-4xl bg-gray-100 text-main p-2 w-10 h-10 rounded-full" /></button>
                            <button className="cursor-pointer"><Icon icon={"solar:multiple-forward-right-outline"} className="text-4xl bg-gray-100 text-main p-2 w-10 h-10 rounded-full" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Link href={href} className="text-xl mt-2 font-medium text-center mx-auto block">{category} - <span className="text-main">{title}</span></Link>
        </div>
    )
}

export default PodcastVideoCard
