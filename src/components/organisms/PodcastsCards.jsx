import PodcastVideoCard from "../molecules/PodcastVideoCard"

function PodcastsCards({ videos, itemsPerPage = 9 }) {
    return (
        <div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-7 mb-10">
                {
                    videos.map((video, indx) => {
                        console.log('thumbnail', video.snippet.resourceId.videoId)
                        return(
                        <PodcastVideoCard key={indx} image={video.snippet.thumbnails.high.url} href={`/about-religion/${video.snippet.resourceId.videoId}`} category="ايه المشكلة" title={video.snippet.title} />
                    )})
                }
            </div>
        </div>
    )
}

export default PodcastsCards
