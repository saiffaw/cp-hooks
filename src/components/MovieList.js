import React, { useState } from "react";

function MovieList({ addTodatat }) {
  const [search, setsearch] = useState("");
  const [show, setshow] = useState(false);
  console.log(addTodatat);

  const handelsearch = (e) => {
    setsearch(e.target.value);
  };
  const handelclik = () => {
    setshow(!show);
  };

  return (
    <div>
      <div className="links">
        <input type="text" onChange={handelsearch} />
        <button onClick={handelclik}> add movie</button>
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
  );
}

export default MovieList;
