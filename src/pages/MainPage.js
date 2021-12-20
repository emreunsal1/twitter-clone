import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";
import TweetWrapper from "../components/TweetWrapper";
import { Link } from "react-router-dom";

export default function MainPage() {
  const context = useMainContext();
  const { userName } = context.user.userInfo;
  const { allTweets } = context.tweet;
  const link = `/profile/${userName}`;

  return (
    <div>
      <AddTweet />
      <Link to={link}>profile</Link>
      <ul>
        <TweetWrapper tweets={allTweets} />
      </ul>
    </div>
  );
}
