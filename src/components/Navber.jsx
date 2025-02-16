import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/allbooks">AllBooks</NavLink>
              <NavLink to="/listedBooks">ListedBooks</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">✨ The Light Of Knowledge 📚</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <ul className="menu menu-horizontal px-1 gap-5 ">
            <NavLink className={`btn bg-[#23BE0A]`} to="/">
              Home
            </NavLink>
            <NavLink className={`btn bg-[#23BE0A]`} to="/about">
              About
            </NavLink>
            <NavLink className={`btn bg-[#23BE0A]`} to="/allbooks">
              AllBooks
            </NavLink>
            <NavLink className={`btn bg-[#23BE0A]`} to="/listedBooks">
              ListedBooks
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#23BE0A]">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
