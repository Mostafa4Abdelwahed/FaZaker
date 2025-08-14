"use client";
import { useState, useEffect } from "react";
import Container from "../atoms/Container";
import PodcastsCards from "../organisms/PodcastsCards";
import TabsSection from "../organisms/TabsSection";
import Pagination from "../molecules/Pagination";
import LoadingSpinner from "../molecules/LoadingSpinner";

export default function AboutReligion() {
  const [podcasts, setPodcasts] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPlaylist]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK}/api/podcast`);
      const { data: podcastsData } = await res.json();
      setPodcasts(podcastsData);

      const getVideos = async (PLAYLIST_ID) => {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
        );
        const data = await res.json();
        return data.items || [];
      };

      const allVideosData = await Promise.all(
        podcastsData.map(async (podcast) => {
          const videos = await getVideos(podcast.id);
          return videos.map(video => ({
            ...video,
            playlistId: podcast.id,
            playlistTitle: podcast.title
          }));
        })
      );

      const mergedVideos = allVideosData.flat();
      setAllVideos(mergedVideos);
      setFilteredVideos(mergedVideos);
      setDisplayedVideos(mergedVideos.slice(0, itemsPerPage));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlaylistChange = (playlistId) => {
    setSelectedPlaylist(playlistId);
    setCurrentPage(1);
    
    if (playlistId === "") {
      setFilteredVideos(allVideos);
      setDisplayedVideos(allVideos.slice(0, itemsPerPage));
      setCurrentPage(1);
    } else {
      const playlistVideos = allVideos.filter(video => 
        video.playlistId === playlistId
      );
      
      setFilteredVideos(playlistVideos);
      setDisplayedVideos(playlistVideos.slice(0, itemsPerPage));
    }
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * itemsPerPage;
    
    setDisplayedVideos(filteredVideos.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
  };

  const hasMore = displayedVideos.length < filteredVideos.length;
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);

  if (loading) {
    return (
      <Container className="py-7">
        <TabsSection />
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <Container className="py-7">
      <TabsSection 
        selectedPlaylist={selectedPlaylist}
        onPlaylistChange={handlePlaylistChange}
        playlists={podcasts}
        totalVideos={allVideos.length}
        filteredVideos={filteredVideos}
      />
      
      {displayedVideos.length > 0 ? (
        <>
          <PodcastsCards videos={displayedVideos} itemsPerPage={itemsPerPage} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            hasMore={hasMore}
            onLoadMore={handleLoadMore}
          />
        </>
      ) : (
        <div className="text-center py-8 text-gray-500">
          لا توجد فيديوهات متاحة حالياً
        </div>
      )}
    </Container>
  );
}