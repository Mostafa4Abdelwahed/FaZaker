import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

function PodcastVideo() {
    return (
        <div className='w-full max-w-4xl mx-auto rounded-2xl overflow-hidden pb-10'>
        <MediaPlayer className='w-full h-full' title="Sprite Fight" src="https://files.vidstack.io/sprite-fight/720p.mp4">
            <MediaProvider />
            <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
        </MediaPlayer>
        </div>
    )
}

export default PodcastVideo
