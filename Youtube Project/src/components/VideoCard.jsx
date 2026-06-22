import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`} className="card">
      <img src={video.thumbnail} alt={video.title} />

      <h3>{video.title}</h3>

      <p>{video.channel}</p>

      <p>
        {video.views} • {video.time}
      </p>
    </Link>
  );
}

export default VideoCard;