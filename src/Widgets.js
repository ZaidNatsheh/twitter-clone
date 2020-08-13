import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widget__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1293513813937930240"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ChampionsLeague"
          options={{ height: 400 }}
        />

        <TwitterShareButton />
      </div>
    </div>
  );
};

export default Widgets;
