import { BiLike, BiDislike } from "react-icons/bi";
import { IoShareOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useState } from "react";
import videos from "../data/videos";

function VideoPlayer() {
  const { id } = useParams();

  const video = videos.find(
    (v) => v.id === Number(id)
  );

  const [likes, setLikes] = useState(125);
  const [liked, setLiked] = useState(false);

  const [subscribed, setSubscribed] = useState(false);
  const [showBellMenu, setShowBellMenu] = useState(false);
  const [comment, setComment] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const [comments, setComments] = useState([
     "😊 Great video!",
    "🔥 Loved this tutorial!",
    "👏 Very helpful content!"
  ]);

  if (!video) {
    return <h2>Video not found</h2>;
  }

  return (
    <div className="player-page">

      <video controls width="1000">
        <source
          src={video.video}
          type="video/mp4"
        />
      </video>

      <h2>{video.title}</h2>

      <p>
        {video.views} • {video.time}
      </p>

      <div className="channel-row">

        <div className="channel-info">
          <h3>
              {video.channel}
             <span className="verified-badge"> ✓ </span>
          </h3>
          <p>1.2M subscribers</p>
        </div>

        <div className="subscribe-area">

          <button
            className={
              subscribed
                ? "subscribed-btn"
                : "subscribe-btn"
            }
            onClick={() =>
              setSubscribed(!subscribed)
            }
          >
            {subscribed
              ? "✓ Subscribed"
              : "Subscribe"}
          </button>

          {subscribed && (

            <div className="bell-wrapper">

              <button
                className="bell-btn"
                onClick={() =>
                  setShowBellMenu(!showBellMenu)
                }
              >
                🔔 ▼
              </button>

              {showBellMenu && (

                <div className="bell-menu">

                  <p>🔔 All</p>

                  <p>🔔 Personalized</p>

                  <p>🔕 None</p>

                  <p
                    onClick={() => {
                      setSubscribed(false);
                      setShowBellMenu(false);
                    }}
                  >
                    👤 Unsubscribe
                  </p>

                </div>

              )}

            </div>

          )}

        </div>

      </div>

      <div className="video-buttons">

        <div className="like-dislike-group">

          <button
            className={
              liked ? "liked-active" : ""
            }
            onClick={() => {
              if (liked) {
                setLikes(likes - 1);
                setLiked(false);
              } else {
                setLikes(likes + 1);
                setLiked(true);
              }
            }}
          >
            <BiLike /> {likes}
          </button>

          <div className="like-divider"></div>

          <button>
            <BiDislike />
          </button>

        </div>

        <>
  <button className="share-btn">
    <IoShareOutline /> Share
  </button>

  <button
    className={
      saved
        ? "saved-btn"
        : "share-btn"
    }
    onClick={() =>
      setSaved(!saved)
    }
  >
    {saved
      ? "✓ Saved"
      : "💾 Save"}
  </button>
</>

      </div>
    
         <div className="comments-section">

  <h3>
    Comments ({comments.length})
  </h3>

  <div className="comment-box">

    <input
      type="text"
      placeholder="Add a comment..."
      value={comment}
      onChange={(e) =>
        setComment(e.target.value)
      }
    />

    <button
      onClick={() => {
        if (comment.trim() !== "") {
          setComments([
            comment,
            ...comments
          ]);

          setComment("");
        }
      }}
    >
      Post
    </button>

  </div>

  {comments.map((c, index) => (
    <p key={index}>{c}</p>
  ))}

</div>
      

    </div>
  );
}

export default VideoPlayer;