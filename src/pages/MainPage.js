import TweetCard from "../components/TweetCard";
import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";

export default function MainPage() {
  const context = useMainContext();
  const { allTweets } = context.tweet;

  return (
    <div>
      <AddTweet />
      <ul>
        {allTweets.map((tweet) => (
          <TweetCard tweet={tweet} />
        ))}
      </ul>
    </div>
  );
}
