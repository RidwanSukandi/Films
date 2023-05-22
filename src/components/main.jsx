// import React from "react";
// import Api_Endpoints from "../config/Api";
// import { useEffect, useState } from "react";
// import Slider from "react-slick";
// import axios from "axios";

// const main = () => {
//   const [playNow, setPlayNow] = useState([]);

//   {
//     playNow.map((items) => {
//       console.log(items);
//     });
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

//   const nowPlaying = async () => {
//     await axios
//       .get(
//         "https://api.themoviedb.org/3/movie/now_playing?api_key=ed57fd60d3a424029a634a5c3188b6a0&language=US&page=1"
//       )
//       .then((response) => {
//         setPlayNow(response.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     nowPlaying();
//   });

//   return (
//     <div>
//       <div>
//         {playNow.map((items, index) => (
//           <img key={index} src={items.backdrop_path} alt="" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default main;
