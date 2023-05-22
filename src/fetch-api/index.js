import Api_Endpoints from "../config/Api";
import Axios from "axios";

const fetchGenre = async (id) => {
  await Axios.get(
    Api_Endpoints.GENRES(id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};

const nowPlaying = async () => {
  await Axios.get(Api_Endpoints.NOW_PLAYING)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { fetchGenre, nowPlaying };
