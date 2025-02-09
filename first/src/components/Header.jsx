function Header() {
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="container-fluid mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl font-bold">Logo</div>
            <div className="ml-10 space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
          <div className="flex-1 mx-10 flex justify-center">
            <input
              type="text"
              className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Profile</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
