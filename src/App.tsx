import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignIn from "./conponents/Login/SingIn";
import Twitter from "./Twitter";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return <div className="app">{user ? <Twitter /> : <SignIn />}</div>;
}

export default App;
