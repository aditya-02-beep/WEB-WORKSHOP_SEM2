function App() {
  return (
    <div className="min-h-screen bg-gray-200 border border-gray-500 m-3">
      
      {/* Header */}
      <header className="bg-blue-500 py-10 text-center">
        <h1 className="text-white text-5xl font-bold">My Website</h1>
      </header>

      {/* Navbar */}
      <nav className="bg-[#222] text-white flex justify-between items-center px-4 py-2">
        <h2 className="text-sm">Website</h2>

        <ul className="flex gap-5 text-sm">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Services</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>
      </nav>

      {/* Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 px-8 py-12 bg-gray-200 min-h-[300px]">
        
        {/* Column 1 */}
        <div className="pr-8 border-r border-gray-500">
          <h2 className="text-2xl font-bold mb-4">Column 1</h2>

          <p className="text-sm leading-6 text-gray-700">
            This is the first column. On small devices the column occupies full
            width, while on medium and large devices it occupies half width
            using Bootstrap grid classes.
          </p>
        </div>

        {/* Column 2 */}
        <div className="pl-8 mt-10 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Column 2</h2>

          <p className="text-sm leading-6 text-gray-700">
            This is the second column. Bootstrap grid system helps to create
            responsive layout.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-white text-center py-3 text-sm">
        Copyright © 2026 My Website
      </footer>
    </div>
  );
}

export default App;