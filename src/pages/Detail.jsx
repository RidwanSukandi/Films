import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/nav";
import { useParams } from "react-router-dom";
import Config from "../config/config";
import Slider from "react-slick";
import Footer from "../components/footer";

const Detail = () => {
  let { id } = useParams();
  const [detail, setdetail] = useState([]);
  const [genres, setGenres] = useState([]);
  const [credit, setCredit] = useState([]);
  const [language, setLanguage] = useState([]);
  const [similiar, setSimiliar] = useState([]);
  const [production, setProduction] = useState([]);

  const config = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAyNmQ4Yjc3ODNjMDJhYjAxNWQxNTQ4YWQ2NTE5MyIsInN1YiI6IjYzYjZlYzJlMDZmOTg0MDBjYjA4ZTNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmsFR2gzvXm1v6M-VTP4iRb5UDb9pGZJIQVxcj7pmWw",
    },
  };

  const endPoint1 = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const endPoint2 = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const endPoint3 = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;

  const request1 = axios.get(endPoint1, config);
  const request2 = axios.get(endPoint2, config);
  const request3 = axios.get(endPoint3, config);

  const fetchDetail = async () => {
    await axios.all([request1, request2, request3]).then(
      axios.spread((response1, response2, response3) => {
        const responseData1 = response1.data;
        const responseData2 = response2.data.cast;
        const responseData3 = response3.data;

        setdetail(responseData1);
        setLanguage(responseData1.spoken_languages);
        setGenres(responseData1.genres);
        setCredit(responseData2);
        setSimiliar(responseData3.results);
        setProduction(responseData1.production_companies);
      })
    );
  };

  const backgroundImage = {
    backgroundImage: `url(${Config.BASE_IMAGE_URL + detail.backdrop_path})`,
  };

  useEffect(() => {
    fetchDetail();
  });

  const settings = {
    infinite: true,
    slickNext: true,
    slickPrev: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const settings2 = {
    ...settings,
    slidesToShow: 8,
    slidesToScroll: 8,
  };

  return (
    <div>
      <Nav />
      <div className="w-full">
        <div
          className="h-screen w-full lg:block hidden bg-cover relative after:absolute after:h-full after:w-full after:bg-gray-900 after:opacity-90 after:content-['']"
          style={backgroundImage}
        >
          <article className="flex absolute z-10 left-10 top-20">
            <div className=" ">
              <img
                className="w-[300px] h-[450px] rounded-lg "
                src={Config.BASE_IMAGE_URL + detail.poster_path}
                alt=""
              />
            </div>
            <div className="px-10 pt-4">
              <h1 className="text-white font-black text-3xl">
                {detail.original_title}
              </h1>
              <p className="text-white text-xl my-2 font-semibold">
                Release : {detail.release_date}
              </p>
              <div className="flex items-center mt-3 mb-5">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {detail.vote_average}
                </span>
              </div>
              <div className="flex text-white font-semibold my-2 space-x-3">
                {genres.map((items, index) => (
                  <p key={index}> {items.name}</p>
                ))}
              </div>
              <h1 className="font-semibold text-white my-2 text-2xl">
                Sinopsis:
              </h1>
              <p className="text-white w-[600px]">{detail.overview}</p>
            </div>
          </article>
        </div>

        <div className="w-full lg:hidden">
          <article>
            <div className="relative ">
              <img
                className=""
                src={Config.BASE_IMAGE_URL + detail.backdrop_path}
                alt=""
              />
            </div>
            <div className="bg-black absolute mb-10 z-10 w-full h-[400px] rounded-xl -mt-5">
              <div className="container mt-3 px-3">
                <h1 className="text-white font-bold text-lg">
                  {detail.original_title}
                </h1>
                <p className="text-white text-sm my-2 font-semibold">
                  Release : {detail.release_date}
                </p>
                <div className="flex items-center mt-3 mb-5">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {detail.vote_average}
                  </span>
                </div>
                <div className="flex flex-wrap text-white font-semibold my-2 gap-2">
                  {genres.map((items, index) => (
                    <p key={index}> {items.name}</p>
                  ))}
                </div>
                <h1 className="font-semibold text-white my-2 text-2xl">
                  Sinopsis:
                </h1>
                <div className="h-48 overflow-scroll  text-white">
                  <p className="w-full">{detail.overview}</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <main className="bg-gray-100 lg:mt-0 mt-96">
          <div className="flex flex-wrap gap-3">
            <div className="lg:w-9/12 h-full w-full sm:px-3 shadow-amber-50  px-10 mt-16">
              <Slider {...settings}>
                {credit.map((items, index) => (
                  <div className="px-3 " key={index}>
                    <img
                      className="w-130 h-[200px] px-3 rounded-lg"
                      src={Config.BASE_IMAGE_URL + items.profile_path}
                      alt=""
                      loading="lazy"
                    />
                    <h2 className="pt-2 font-semibold">{items.name}</h2>
                    <p className="w-32">{items.character}</p>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="3/12 lg:mt-12 mt-0 px-2 sm:px-5">
              <h2 className="font-bold text-xl">Status : </h2>
              <div className="w-32 h-7 border rounded-md mt-2 border-teal-500">
                <p className="text-center font-semibold ">{detail.status}</p>
              </div>
              <h2 className="font-bold my-2 text-xl">Language :</h2>
              <div className="flex flex-wrap space-x-2">
                {language.map((items, index) => (
                  <p className="font-serif block" key={index}>
                    {items.english_name}
                  </p>
                ))}
              </div>
              <h2 className="font-bold text-xl my-2">Budget : </h2>
              <p className="font-serif">${detail.budget}</p>
              <h2 className="font-bold text-xl my-2">Revenue : </h2>
              <p className="font-serif">${detail.revenue}</p>
            </div>
          </div>

          <div className="px-10 mt-12 hidden lg:block">
            <h2 className="font-bold text-xl">Production Companies</h2>
            <div className="flex space-x-10 ">
              {production.slice(0, 7).map((items, index) => (
                <img
                  key={index}
                  className="w-36 h-20 mt-8"
                  src={Config.BASE_IMAGE_URL + items.logo_path}
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <div className="px-4 lg:px-10">
            <h1 className="mt-12 font-bold text-xl">Similiar Movies : </h1>
            <div className="w-full h-full mt-8">
              <Slider {...settings2}>
                {similiar.map((items, index) => (
                  <div className="" key={index}>
                    <a href={`/details/${items.id}`}>
                      <img
                        className="w-130 h-[200px] mb-9 px-3 rounded-lg"
                        src={Config.BASE_IMAGE_URL + items.poster_path}
                        alt=""
                        loading="lazy"
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
