import React, { useState } from "react";

import "./MovieCard.css";

function MovieCard() {
  const [add, setadd] = useState({
    name: "",
    url: "",
    rate: "",
  });

  const [addTodatat, setaddTodatat] = useState([
    {
      name: "blackwidow",
      url: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eaque",
      rate: 4,
    },
    {
      name: "Avatar",
      url: "https://regalcdn.azureedge.net/REG/AvatarReIssue/HO00012894/TV_SmallPosterImage/20220823-140959275.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eaque",
      rate: 4,
    },
    {
      name: "prey",
      url: "https://cdn.moviefone.com/admin-uploads/posters/prey-movie-poster_1654648712.jpg?d=360x540&q=80",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eaque",
      rate: 3,
    },
    {
      name: "fall",
      url: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/fall-2022/large_fall-movie-poster-2022.jpeg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eaque",
      rate: 2,
    },
    {
      name: "angry bird",
      url: "https://canvas.tubitv.com/c3ab9770-3d71-4317-bf55-1bc455ce87b5/psqxvy?w=408&h=583",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eaque",
      rate: 2,
    },
    {
      name: "akamaividz2",
      url: "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227557/portrait/1920x770c6548efc88e74dec8406e501eb9d21c2.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia mollitia temporibus nesciunt nisi tenetur!",
      rate: 5,
    },
    {
      name: "amsterdam",
      url: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/amsterdam-2022/large_amsterdam-movie-poster-2022.jpeg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia mollitia temporibus nesciunt nisi tenetur!",

      rate: 3,
    },
    {
      name: "times of india",
      url: "http://timesofindia.indiatimes.com/photo/89619302.cms",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia mollitia temporibus nesciunt nisi tenetur!",

      rate: 1,
    },
  ]);

  const handel1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setadd((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const [search, setsearch] = useState("");
  const [show, setshow] = useState(false);
  console.log(addTodatat);

  const handelsearch = (e) => {
    setsearch(e.target.value);
  };
  const handelclik = () => {
    setshow(!show);
  };

  const handelclik2 = () => {
    setshow(!show);
    setaddTodatat([...addTodatat, add]);
  };
  console.log(addTodatat);

  return (
    <div>
      <div>
        <div className="links">
          <input type="text" onChange={handelsearch} />
          <button onClick={handelclik}>add movie</button>
        </div>

        <div className="container">
          {addTodatat
            .filter((data) => {
              if (search === "") return data;
              else if (
                data.name.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return data;
              } else if (data.rate == search) {
                return data;
              }
            })
            .map((card, index) => {
              return (
                <div key={index}>
                  <div key={index} className="wraper">
                    <img src={card.url} alt="movies" />

                    <div className="title">{card.name}</div>
                    <div className="description">{card.desciption}</div>
                    <div className="rate">{card.rate}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div
        className={show ? "container1 active" : "container1 "}
        onBlur={() => {
          setshow(false);
        }}
      >
        <label htmlFor="">title of the movie </label>
        <input type="text" name="name" className="titlee" onChange={handel1} />
        <label htmlFor=""> url adress</label>
        <input type="adress" name="url" className="adress" onChange={handel1} />
        <label htmlFor=""> movie rating</label>
        <input
          type="number"
          name="rate"
          className="rating"
          onChange={handel1}
        />
        <button onClick={handelclik2}>add movie to list</button>
      </div>
    </div>
  );
}

export default MovieCard;
