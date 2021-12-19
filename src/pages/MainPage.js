import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";
import TweetWrapper from "../components/TweetWrapper";

export default function MainPage() {
  const context = useMainContext();
  const { allTweets } = context.tweet;

  return (
    <div>
      <AddTweet />
      <ul>
        <TweetWrapper tweets={allTweets} />
      </ul>
    </div>
  );
}
