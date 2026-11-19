
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav>
      <Link to="/">Home</Link> {" | "}

      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link> {" | "}
          <Link to="/profile">Profile</Link> {" | "}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> {" | "}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
