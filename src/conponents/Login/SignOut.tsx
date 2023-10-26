import { auth } from "../../firebase";
import "./SignOut.css";

function SignOut() {
  return (
    <div>
      <button onClick={() => auth.signOut()} className="signOutButton">
        <div id="title">サインアウト</div>
      </button>
    </div>
  );
}

export default SignOut;
