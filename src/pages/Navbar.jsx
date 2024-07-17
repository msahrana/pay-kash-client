import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl lg:text-4xl font-bold">
          <span className="text-green-500">Pay</span>
          <span className="text-red-500">Kash</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/register">
          <button className="bg-red-500 px-2 py-1 rounded-lg text-white">
            Register
          </button>
        </Link>
        {/* {user ? (
          <div className="hidden md:flex lg:flex">
            <div id="my-anchor-element-id">
              <img className="size-10 rounded-full mr-2" src={user?.photoURL} />
            </div>
            <button
              onClick={handleLogOut}
              className="bg-red-500 px-2 py-1 rounded-lg text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-red-500 px-2 py-1 rounded-lg text-white">
              Login
            </button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
