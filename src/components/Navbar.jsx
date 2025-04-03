import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { user } = useGlobalContext();
  const { isPending, logout } = useLogout();
  return (
    <header className="bg-base-200">
      <div class="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-netural" to="/">
            Logo
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="flex gap-3 items-center mr-5">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src={user.photoURL} alt={`${user.displayName}'s avatar`} />
              </div>
            </div>
            <div>Hello, {user.displayName}</div>
          </div>
          {!isPending && (
            <button onClick={logout} className="btn btn-secondary btn-outline">
              Logout
            </button>
          )}
          {isPending && (
            <button onClick={logout} className="btn btn-secondary ">
              Loading...
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
