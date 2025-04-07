export default function Nav() {
  return (
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
          <div className="flex items-center space-x-5">
              <img src="/images/logo.png" alt="Logo" className="h-20 w-20" />
              <span className="text-3xl font-bold">Institute of Alexandria</span>
          </div>
          <ul className="flex space-x-6 text-xl font-bold">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">Past Papers</a></li>
              <li><a href="#" className="hover:underline">Teacher Panel</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
      </nav>
  );
}
