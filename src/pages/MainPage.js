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
    <div >
        <AddTweet />
        <TweetWrapper tweets={allTweetsByDate()} />
    </div>
  );
}
