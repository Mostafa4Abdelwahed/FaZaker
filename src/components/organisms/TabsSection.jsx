import Button from "../atoms/Button"

function TabsSection({ selectedPlaylist, onPlaylistChange, playlists, totalVideos, filteredVideos }) {
  const handleTabClick = (playlistId) => {
    onPlaylistChange(playlistId);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center flex-wrap gap-5 mb-4">
        <Button 
          type={selectedPlaylist === "" ? "primary" : "outline"} 
          onClick={() => handleTabClick("")}
        >
          الكل ({totalVideos})
        </Button>
        {playlists?.map((playlist) => (
          <Button 
            key={playlist.id}
            type={selectedPlaylist === playlist.id && selectedPlaylist !== "" ? "primary" : "outline"} 
            onClick={() => handleTabClick(playlist.id)}
          >
            {playlist.title}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default TabsSection
