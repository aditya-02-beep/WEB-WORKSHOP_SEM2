function Sidebar({
  setSelectedCategory,
  selectedCategory
}) {
 return (
  <div className="sidebar">

    <p
  className={selectedCategory === "all" ? "active" : ""}
  onClick={() => setSelectedCategory("all")}
>
  🏠 Home
</p>

<p
  className={selectedCategory === "shorts" ? "active" : ""}
  onClick={() => setSelectedCategory("shorts")}
>
  🎬 Shorts
</p>

<p
  className={selectedCategory === "music" ? "active" : ""}
  onClick={() => setSelectedCategory("music")}
>
  🎵 Music
</p>

<p
  className={selectedCategory === "gaming" ? "active" : ""}
  onClick={() => setSelectedCategory("gaming")}
>
  🎮 Gaming
</p>

<p
  className={selectedCategory === "sports" ? "active" : ""}
  onClick={() => setSelectedCategory("sports")}
>
  🏏 Sports
</p>

<p
  className={selectedCategory === "technology" ? "active" : ""}
  onClick={() => setSelectedCategory("technology")}
>
  💻 Technology
</p>

<p
  className={selectedCategory === "education" ? "active" : ""}
  onClick={() => setSelectedCategory("education")}
>
  📚 Education
</p>

<p
  className={selectedCategory === "travel" ? "active" : ""}
  onClick={() => setSelectedCategory("travel")}
>
  ✈️ Travel
</p>

<p
  className={selectedCategory === "food" ? "active" : ""}
  onClick={() => setSelectedCategory("food")}
>
  🍔 Food
</p>

<p
  className={selectedCategory === "pets" ? "active" : ""}
  onClick={() => setSelectedCategory("pets")}
>
  🐶 Pets
</p>

<p
  className={selectedCategory === "movies" ? "active" : ""}
  onClick={() => setSelectedCategory("movies")}
>
  🎬 Movies
</p>

<p
  className={selectedCategory === "nature" ? "active" : ""}
  onClick={() => setSelectedCategory("nature")}
>
  🌿 Nature
</p>
   

  </div>
);
}

export default Sidebar;