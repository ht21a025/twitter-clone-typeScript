import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from "react-flip-move";

interface PostData {
  displayName: string;
  username: string;
  verified: boolean;
  text: string;
  avatar: string;
  image: string;
  timestamp: number;
}

function Timeline() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postList: PostData[] = [];
      querySnapshot.forEach((doc) => {
        const postData = doc.data() as PostData; // キャストを行う
        postList.push(postData);
      });
      setPosts(postList);
    });

    return () => {
      // クリーンアップ関数でunsubscribe
      unsubscribe();
    };
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
