import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

function Home({
  search,
  selectedCategory
}) {
      const filteredVideos = videos.filter(
  (video) =>
    video.title
      .toLowerCase()
      .includes(search.toLowerCase()) &&
    (
      selectedCategory === "all" ||
      video.category.toLowerCase() === selectedCategory
    )
);
return (
  <>
    {filteredVideos.length === 0 ? (
      <h2>No videos found 😢</h2>
    ) : (
      <div className="videos-grid">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    )}
  </>
);

   

}

export default Home;