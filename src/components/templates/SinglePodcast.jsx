import Container from '../atoms/Container'
import PodcastsCards from '../organisms/PodcastsCards'
import PodcastVideo from '../organisms/PodcastVideo'

export default function SinglePodcast() {
    return (
        <Container className='py-7'>
            <PodcastVideo />
            <PodcastsCards />
        </Container>
    )
}
