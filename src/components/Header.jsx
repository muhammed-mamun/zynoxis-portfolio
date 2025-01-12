import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar max-w-screen-xl mx-auto bg-zinc-200 p-4 rounded-xl">
      {/* Left: Logo and Dropdown for mobile */}
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
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#about">About Us</Link>
            </li>
            <li>
              <Link to="#services">Services</Link>
            </li>
            <li>
              <Link to="#contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl cursor-pointer">
          Zynoxis
        </Link>
      </div>

      {/* Center: Navigation links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#about">About Us</Link>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
        </ul>
      </div>

      {/* Right: Contact link */}
      <div className="navbar-end">
        <ul>
          <li>
            <Link to="#contacts" className="hidden md:btn md:btn-outline">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
