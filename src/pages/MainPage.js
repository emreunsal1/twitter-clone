import TweetCard from "../components/TweetCard";
import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";

export default function MainPage() {
  const context = useMainContext();
  const { allTweets } = context.tweet;
  console.log(context.tweet.allTweets);
  return (
    <div>
      <AddTweet />
      <ul>
        {allTweets.map((tweetInfo) => (
          <TweetCard tweetInfo={tweetInfo} />
        ))}
      </ul>
    </div>
  );
}
