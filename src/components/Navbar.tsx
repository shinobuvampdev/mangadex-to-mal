export default function Navbar() {
  return (
    <nav className="bg-primary sticky shadow-md w-screen top-0 z-50 text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-3xl font-bold">MG to MAL</h1>
          <div className="flex space-x-6">
            <a>
              <h1>Home</h1>
            </a>
            <a>
              <h1>Credits</h1>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
