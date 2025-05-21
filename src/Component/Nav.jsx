import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Text */}
        <div className="flex items-center space-x-2">
          <img
            src="\images\happy-kids-logo-free-vector.jpg"
            className="  h-10 w-12 rounded  hover:scale-110 "
          ></img>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex space-x-16 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-orange-400 transition text-xl font-mono"
          >
            HOME
          </Link>

          <Link
            to="/alphabet"
            className="hover:text-orange-400 transition text-xl font-mono"
          >
            ALPHABET
          </Link>

          <Link
            to="/phonics"
            className="hover:text-orange-400 transition text-xl font-mono"
          >
            PHONICS
          </Link>

          <Link
            to="/pronunciation"
            className="hover:text-orange-400 transition text-xl font-mono"
          >
            PRONUNCIATION
          </Link>
          {/* <a
            href="https://www.youtube.com/@CordovaJoyfulLearning/videos"
            target="_blank"
            className="hover:text-orange-400 transition text-xl font-mono"
          >
            SOCIAL MEDIA
          </a>
          <a
            href="https://cordova.co.in/Home/about"
            target="_blank"
            className="hover:text-orange-400 transition text-xl font-mono"
          >
            ABOUT US
          </a> */}
        </div>

        {/* Right: Button */}
        <div>
          <button className="bg-gray-700 hover:bg-gray-400 px-4 py-2 rounded ">
            Log In
          </button>
        </div>
      </nav>
    </>
  );
}
export default Nav;
