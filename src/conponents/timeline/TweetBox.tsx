import React, { useState } from 'react';
import { Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from "../../firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState<string>("");
  const [tweetImage, setTweetImage] = useState<string>("");
  const [user] = useAuthState(auth);

  // user.displayNameがnullの場合、デフォルト値を設定
  const displayName = user?.displayName || "ユーザー名なし";
  const displayIcon = user && user.photoURL ? user.photoURL : "https://i.gyazo.com/f8cc146ca5c4de032421a4d213037702.png";

  const sendTweet = async (e: React.FormEvent) => {
    e.preventDefault();

    // Firebaseのデータベースにデータを追加
    await addDoc(collection(db, "posts"), {
      displayName: displayName,
      username: displayName, // ここを適切なユーザー名のプロパティに変更
      verified: true,
      text: tweetMessage,
      avatar: displayIcon,
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <img src={displayIcon} alt={displayName} />
          <input
            value={tweetMessage}
            placeholder="今どうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweetBox_imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        />

        <Button
          className="tweetBox_tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
