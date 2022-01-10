import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";
import TweetWrapper from "../components/TweetWrapper";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

export default function MainPage() {
  const context = useMainContext();
  const { link } = context.user;
  const { allTweetsByDate } = context.tweet;

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <AddTweet />
        <TweetWrapper tweets={allTweetsByDate()} />
      </div>
      <div className="side-menu">
        <SideMenu />
      </div>
    </div>
  );
}
