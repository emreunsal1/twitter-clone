import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";
import TweetWrapper from "../components/TweetWrapper";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";

export default function MainPage() {
  const context = useMainContext();
  const { link } = context.user;
  const { allTweetsByDate } = context.tweet;

  return (
    <div className="main-container">
      <div className="side-menu">
        <SideMenu />
      </div>
      <div className="content">
        <AddTweet />
        <TweetWrapper tweets={allTweetsByDate()} />
      </div>
    </div>
  );
}
