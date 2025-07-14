import Button from "../atoms/Button"
import PodcastVideoCard from "../molecules/PodcastVideoCard"
import Thumbnail from "@/assets/thumbnail_podcast.jpg"


function PodcastsCards() {
    return (
        <div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-7 mb-10">
                {
                    Array.from({ length: 6 }).map((_, indx) => (
                        <PodcastVideoCard key={indx} image={Thumbnail} href={"/podcasts/id"} category="ايه المشكلة" title="لو مبتصليش؟" />
                    ))
                }
            </div>
            <div className="w-full flex items-center justify-center">
                <Button className="px-16 mx-auto">المزيد</Button>
            </div>
        </div>
    )
}

export default PodcastsCards
