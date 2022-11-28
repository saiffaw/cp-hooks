import React, { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ setaddTodatat, addTodatat }) {
  const [add, setadd] = useState({
    name: "",
    url: "",
    rate: "",
    video: "",
  });

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
  console.log(typeof addTodatat);

  return (
    <div>
      <div>
        <div className="links">
          <input type="text" onChange={handelsearch} />
          <button onClick={handelclik}>add movie</button>
        </div>

        <div
          className="container"
          onClick={() => {
            setshow(false);
          }}
        >
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
                <Link to={`/movie/${card.name}`} key={index}>
                  <div key={index}>
                    <div key={index} className="wraper">
                      <img src={card.url} alt="movies" />

                      <div className="title">{card.name}</div>
                      <div className="description">{card.desciption}</div>
                      <div className="rate">{card.rate}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      <div className={show ? "container1 active" : "container1 "}>
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
        <label htmlFor=""> movie video</label>
        <input
          type="adress"
          name="video"
          className="adress"
          onChange={handel1}
        />
        <button onClick={handelclik2}>add movie to list</button>
      </div>
    </div>
  );
}

export default MovieCard;
