
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Email: {user?.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
