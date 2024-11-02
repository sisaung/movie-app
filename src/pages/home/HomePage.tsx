import Discover from "./discover/Discover";
import Popular from "./popular/Popular";
import Trending from "./trending/Trending";

const HomePage = () => {
  return (
    <div>
      <Discover />
      <Trending />
      <Popular />
    </div>
  );
};

export default HomePage;
