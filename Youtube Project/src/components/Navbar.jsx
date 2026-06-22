import { useState } from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar({
  search,
  setSearch,
  setSelectedCategory,
  darkMode,
  setDarkMode
}) {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
        onClick={() => setSelectedCategory("all")}
      >
        <h2>
          <span className="youtube-icon">▶</span>
          YouTube
          <span className="country-code">IN</span>
        </h2>
      </Link>

      <input
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="nav-actions">

        {/* Create */}

        <div
          className="profile-section"
          onMouseEnter={() => setShowCreate(true)}
          onMouseLeave={() => setShowCreate(false)}
        >
          <div className="create-btn">
            ➕ Create
          </div>

          {showCreate && (
            <div className="profile-dropdown">
              <p>📤 Upload Video</p>
              <p>📺 Go Live</p>
              <p>📝 Create Post</p>
            </div>
          )}
        </div>

        {/* Notifications */}

        <div
          className="profile-section"
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <div className="profile">
            <IoNotificationsOutline />
          </div>

          {showNotifications && (
            <div className="profile-dropdown">
              <p>🎵 Taylor Swift uploaded a video</p>
              <p>🎮 Gaming Live Stream Started</p>
              <p>💻 New React Tutorial Available</p>
            </div>
          )}
        </div>

        {/* Profile */}

        <div className="profile-section">

          <div
            className="profile"
            onClick={() =>
              setShowProfile(!showProfile)
            }
          >
            <FaRegUserCircle />
          </div>

          {showProfile && (
            <div className="profile-dropdown">

              <p>Your Channel</p>

              <p>History</p>

              <p
                onClick={() =>
                  setDarkMode(!darkMode)
                }
              >
                {darkMode
                  ? "☀️ Light Mode"
                  : "🌙 Dark Mode"}
              </p>

              <p>Settings</p>

              <p>Logout</p>

            </div>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;