function App() {
  return (
    <div className="min-h-screen bg-[#e9e9e9] p-5">
      
      {/* Main Container */}
      <div className="border-2 border-gray-500 bg-white">

        {/* Navbar */}
        <nav className="bg-[#1f1f29] text-white flex items-center justify-between px-14 py-4">
          <h1 className="text-lg font-medium">TechStore</h1>

          <ul className="flex gap-6 text-[13px] text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Product Section */}
        <div className="flex flex-wrap gap-6 px-14 py-10 justify-start bg-[#f3f3f3] min-h-[430px]">

          {/* Card 1 */}
          <div className="w-[260px] bg-white border border-gray-300 shadow-sm p-3">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
              alt="Laptop"
              className="w-full h-[170px] object-contain"
            />

            <h2 className="text-2xl mt-4">Laptop</h2>

            <p className="text-gray-600 text-sm mt-1">
              High performance laptop
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-lg font-medium">₹50,000</span>

              <span className="bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                New
              </span>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded mt-4">
              View Details
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-[260px] bg-white border border-gray-300 shadow-sm p-3">
            <img
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
              alt="Mobile"
              className="w-full h-[170px] object-contain"
            />

            <h2 className="text-2xl mt-4">Mobile</h2>

            <p className="text-gray-600 text-sm mt-1">
              Latest smartphone
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-lg font-medium">₹30,000</span>

              <span className="bg-red-500 text-white text-xs px-2 py-[2px] rounded">
                Sale
              </span>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded mt-4">
              View Details
            </button>
          </div>

          {/* Card 3 */}
          <div className="w-[260px] bg-white border border-gray-300 shadow-sm p-3">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              alt="Headphones"
              className="w-full h-[170px] object-contain"
            />

            <h2 className="text-2xl mt-4">Headphones</h2>

            <p className="text-gray-600 text-sm mt-1">
              Noise canceling
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-lg font-medium">₹5,000</span>

              <span className="bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                New
              </span>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded mt-4">
              View Details
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#1f1f29] text-white text-center text-sm py-4">
          © 2026 TechStore | Follow us on social media
        </footer>
      </div>
    </div>
  );
}

export default App;