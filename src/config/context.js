import { createContext } from "react";

export const playingNow = createContext();

export const nowPlaying = () => {
  const [playNow, setPlayingNow] = useState([]);
  return (
    <playingNow.Provider
      value={{ playNow, setPlayingNow }}
    ></playingNow.Provider>
  );
};
