import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import axios from "axios";
import Config from "../config/config";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/footer";

const Genres = () => {
  let { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
  const config = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAyNmQ4Yjc3ODNjMDJhYjAxNWQxNTQ4YWQ2NTE5MyIsInN1YiI6IjYzYjZlYzJlMDZmOTg0MDBjYjA4ZTNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmsFR2gzvXm1v6M-VTP4iRb5UDb9pGZJIQVxcj7pmWw",
    },
  };
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    await axios.get(url, config).then((response) => {
      setGenres(response.data.results);
    });
  };

  useEffect(() => {
    fetchGenres();
  });

  return (
    <div>
      <Nav />
      <div className="bg-[#111827] w-full flex flex-wrap px-8 pb-9 justify-evenly gap-8">
        {genres.slice(0, 20).map((items, index) => (
          <div className="" key={index}>
            <Link to={`/details/${items.id}`}>
              <img
                className="w-[280px] rounded-md"
                src={Config.BASE_IMAGE_URL + items.poster_path}
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Genres;
