import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import "./SignIn.css";

function SingIn() {
  function SignInButton() {
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider);
    };

    return (
      <button onClick={signInWithGoogle} className="signInButton">
        グーグルでサインイン{" "}
      </button>
    );
  }

  return (
    <div className="SignIn_background">
      <div className="formContainer">
        <h1>Twitterクローン</h1>
        <SignInButton />
      </div>
    </div>
  );
}

export default SingIn;
