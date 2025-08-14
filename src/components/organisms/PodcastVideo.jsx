"use client"
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { useParams } from 'next/navigation';

function PodcastVideo() {
    const { id } = useParams();
    return (
        <div className='w-full max-w-4xl mx-auto rounded-2xl overflow-hidden pb-10'>
        <MediaPlayer className='w-full h-full' title="Sprite Fight" src={`https://www.youtube.com/watch?v=${id}`}>
            <MediaProvider />
            <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
        </MediaPlayer>
        </div>
    )
}

export default PodcastVideo
