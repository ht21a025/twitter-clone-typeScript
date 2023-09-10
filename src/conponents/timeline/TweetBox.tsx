import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState<string>("");
  const [tweetImage, setTweetImage] = useState<string>("");

  const sendTweet = (e: React.FormEvent) => {
    /* firebaseのデータベースにデータを追加 */
    e.preventDefault();

    addDoc(collection(db, "posts"),{
      displayName: "笠井佑恭",
      username: "ht21a025",
      verified: true,
      text: tweetMessage,
      avatar: "https://gyazo.com/f8cc146ca5c4de032421a4d213037702.png",
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
             <Avatar />
             <input 
                value={tweetMessage}
                placeholder="今どうしてる？" 
                type="text" 
                onChange={(e) => setTweetMessage(e.target.value)}
              ></input>
            </div>
            <input 
              value={tweetImage}
              className="tweetBox_imageInput" 
              placeholder="画像のURLを入力してください" 
              type="text"
              onChange={(e) => setTweetImage(e.target.value)}
            ></input>

            <Button 
              className="tweetBox_tweetButton" 
              type="submit"
              onClick={sendTweet}
            >
              ツイートする
            </Button>
        </form>
    </div>
  )
}

export default TweetBox;
