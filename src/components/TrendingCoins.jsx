import { Coin } from "./Coin";

export const TrendingCoins = () => {
  return (
    <div className="bg-white mx-2 my-4 p-1 rounded-lg shadow-sm">
      <p className="text-xl font-medium m-2">Trending Coins (24h)</p>
      <Coin
        iconUrl={
          "https://images.pexels.com/photos/6763964/pexels-photo-6763964.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        name={"Bitcoin(BTC)"}
        percent={"8.21%"}
        s
      />
      <Coin
        iconUrl={
          "https://images.pexels.com/photos/6763964/pexels-photo-6763964.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        name={"Bitcoin(BTC)"}
        percent={"8.21%"}
        s
      />
      <Coin
        iconUrl={
          "https://images.pexels.com/photos/6763964/pexels-photo-6763964.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        name={"Bitcoin(BTC)"}
        percent={"8.21%"}
        s
      />
    </div>
  );
};
