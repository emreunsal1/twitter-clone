import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";
import TweetWrapper from "../components/TweetWrapper";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import "../style/mainPage.scss";

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
        <Link to={link}>profile</Link>
        <ul>
          <TweetWrapper tweets={allTweetsByDate()} />
        </ul>
      </div>
    </div>
  );
}
