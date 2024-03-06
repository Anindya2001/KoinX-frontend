import { AboutBitcoin } from "./components/AboutBitcoin";
import { Appbar } from "./components/Appbar";
import { GetStarted } from "./components/GetStarted";
import { MiddleButtons } from "./components/MiddleButtons";
import { Sentiment } from "./components/Sentiment";
import { Team } from "./components/Team";
import { Tokenomics } from "./components/Tokenomics";
import { Traverser } from "./components/Traverser";
import { TrendingCoins } from "./components/TrendingCoins";

function App() {
  return (
    <div className="bg-gray-100">
      <Appbar />
      <Traverser />
      <div className="flex">
        <div className="w-3/4">
          <AboutBitcoin />
          <MiddleButtons />
          <Sentiment />
          <Tokenomics />
          <Team />
        </div>
        <div className="w-1/4">
          <GetStarted />
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
}

export default App;
