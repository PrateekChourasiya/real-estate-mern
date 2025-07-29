import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  // console.log(currentUser);
  return (
    <header className="bg-yellow-200 shadow-md">
      <div className="flex justify-between items-centre max-w-6xl mx-auto p-3">
        <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-yellow-700">Estate</span>
            <span className="text-yellow-500">Ease</span>
            </h1>
        </Link>
        
        <form className="bg-yellow-50 p-3 rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search.."
          />
          <FaSearch className="text-black" />
        </form>
        <ul className="flex gap-4">
           <Link to="/home"><li className="inline text-shadow-yellow-950 hover:underline">Home</li></Link>
            <Link to="/about"><li className="inline text-shadow-yellow-950 hover:underline">About</li></Link>
            <Link to="/sign-in">
              {currentUser ? (
                  <img src = {currentUser.avatar} alt = 'Proflie'/>
              ) : (
                <li className="inline text-shadow-yellow-950 hover:underline">Sign In</li>
              )}
            </Link>
        </ul>
      </div>
    </header>
  );
}
