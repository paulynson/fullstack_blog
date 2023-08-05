import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-nvy rounded-b-2xl shadow-md py-6 px-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl text-zed font-bold">
          Dev~Blogs
        </Link>
        <ul className="flex gap-4">
          <li>
            <NavLink to="/login" className="text-zed hover:font-bold">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="w-full py-2 px-6 rounded-full hover:bg-zed hover:text-nvy text-zed shadow-sm font-bold border-2 border-zed bg-transparent"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
