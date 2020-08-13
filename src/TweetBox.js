import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    if(tweetMessage !== 0){
        db.collection("posts").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            displayName: "Zaid Natsheh",
            username: "zaidkozan",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
            "https://instagram.fjrs3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67382635_374438709886279_3001111516226256896_n.jpg?_nc_ht=instagram.fjrs3-1.fna.fbcdn.net&_nc_ohc=DLN6jPlcgloAX9Kc55K&oh=c2b1f79b747ba9caa00978435648b2dc&oe=5F5EE2B3",
          });
          setTweetMessage("");
          setTweetImage("");
    }
    

   
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
        <Avatar src="https://instagram.fjrs3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67382635_374438709886279_3001111516226256896_n.jpg?_nc_ht=instagram.fjrs3-1.fna.fbcdn.net&_nc_ohc=DLN6jPlcgloAX9Kc55K&oh=c2b1f79b747ba9caa00978435648b2dc&oe=5F5EE2B3" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
          disabled={!tweetMessage}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
/* import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://instagram.fjrs3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67382635_374438709886279_3001111516226256896_n.jpg?_nc_ht=instagram.fjrs3-1.fna.fbcdn.net&_nc_ohc=DLN6jPlcgloAX9Kc55K&oh=c2b1f79b747ba9caa00978435648b2dc&oe=5F5EE2B3" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
 */