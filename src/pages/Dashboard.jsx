import React from "react";
import Nav from "../components/nav";
import Config from "../config/config";
import Api_Endpoints from "../config/Api";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [playingNow, setplayingNow] = useState([]);
  const [mostFavorite, setmostFavorite] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upComing, setupComing] = useState([]);
  const [data, setdata] = useState([]);

  const endPoint1 =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const endPoint2 = Api_Endpoints.NOW_PLAYING2;
  const endPoint3 = Api_Endpoints.NOW_PLAYING3;
  const endPoint4 = Api_Endpoints.UPCOMING;

  const request1 = axios.get(endPoint1, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAyNmQ4Yjc3ODNjMDJhYjAxNWQxNTQ4YWQ2NTE5MyIsInN1YiI6IjYzYjZlYzJlMDZmOTg0MDBjYjA4ZTNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmsFR2gzvXm1v6M-VTP4iRb5UDb9pGZJIQVxcj7pmWw",
    },
  });
  const request2 = axios.get(endPoint2);
  const request3 = axios.get(endPoint3);
  const request4 = axios.get(endPoint4);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const nowPlaying = async () => {
    await axios
      .all([request1, request2, request3, request4])
      .then(
        axios.spread((response1, response2, response3, response4) => {
          const responseData1 = response1.data.results;
          const responseData2 = response2.data.results;
          const responseData3 = response3.data.results;
          const responseData4 = response4.data.results;

          setplayingNow(responseData1);
          setmostFavorite(responseData2);
          setPopular(responseData3);
          setupComing(responseData4);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    nowPlaying();
  });

  return (
    <div>
      <Nav />
      <div className=" bg-[#111827]  px-8 h-full">
        <h1 className="text-white font-bold text-lg px-2">Now Playing :</h1>
        <Slider {...settings}>
          {playingNow.map((items, index) => (
            <div className="block overflow-hidden w-full px-4 inset-0 m-0 box-border shadow-gray-800">
              <NavLink to={`details/${items.id}`}>
                <img
                  className="rounded-lg mt-4 px-1 h-[200px]  "
                  key={index}
                  src={Config.BASE_IMAGE_URL + items.poster_path}
                  alt=""
                />
              </NavLink>
            </div>
          ))}
        </Slider>
        <h1 className="text-white font-bold text-lg px-2">Most Favorite :</h1>
        <Slider {...settings}>
          {mostFavorite.map((items, index) => (
            <div className="px-4">
              <NavLink to={`/details/${items.id}`}>
                <img
                  className="rounded-lg mt-4 px-1  h-[200px]"
                  key={index}
                  src={Config.BASE_IMAGE_URL + items.poster_path}
                  alt=""
                />
              </NavLink>
            </div>
          ))}
        </Slider>
        <h1 className="text-white font-bold text-lg px-2">New Trailler :</h1>
        <Slider {...settings}>
          {upComing.map((items, index) => (
            <div className=" px-4">
              <NavLink to={`/details/${items.id}`}>
                <img
                  className="rounded-lg mt-4 px-1 h-[200px]"
                  key={index}
                  src={Config.BASE_IMAGE_URL + items.poster_path}
                  alt=""
                />
              </NavLink>
            </div>
          ))}
        </Slider>
        <h1 className="text-white font-bold text-lg px-2">
          Popular TV Movies :
        </h1>
        <Slider {...settings}>
          {popular.map((items, index) => (
            <div className=" px-4">
              <NavLink to={`details/${items.id}`}>
                <img
                  className="rounded-lg mt-4 px-1  h-[200px]"
                  key={index}
                  src={Config.BASE_IMAGE_URL + items.poster_path}
                  alt="Popular TV Movies"
                />
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Dashboard;
