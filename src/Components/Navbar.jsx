import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => console.log("logOut Done"));
  };
  console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>SingIn</NavLink>
      </li>
      <li>
        <NavLink to={"/singup"}>SingUp</NavLink>
      </li>
      <li>
        <NavLink to={"/orders"}>Orders</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && <span>{user.email}</span>}
        <Link onClick={handleLogout} className="btn">
          Sing Out
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
