import React from "react";
import { useParams } from "react-router-dom";
import Back from "../components/Back";

import "./Blackwidow.css";

function Blackwidow({ data }) {
  console.log(data);

  const { name } = useParams();
  return (
    <div>
      {data
        .filter((movie) => movie.name === name)
        .map((card, index) => {
          return (
            <div className="container3" key={index}>
              <h1>{card.name} </h1>
              <div className="hiii">
                <iframe
                  width="850"
                  height="500"
                  src={`//www.youtube.com/embed/${card.video}`}
                  title="Marvel Studios’ Black Widow | New Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur veniam sed quae, temporibus sint pariatur accusamus
                  dolores quaerat, voluptatum placeat enim assumenda
                  consequuntur quis. Iste possimus consequatur nostrum sequi
                  magnam maiores quasi minima quam, harum minus consequuntur eum
                  itaque iusto vel molestias expedita autem deserunt ut velit
                  excepturi assumenda pariatur. Error nesciunt omnis optio totam
                  id aliquid veritatis, impedit nulla similique libero
                  accusantium voluptatem ratione debitis dignissimos corrupti
                  eligendi reprehenderit praesentium quis ipsa corporis? Laborum
                  necessitatibus, illo praesentium distinctio cupiditate
                  reiciendis fugit sit doloremque. Odit cum dolorum aperiam quod
                  expedita aliquid alias, illo adipisci itaque laborum optio
                  magni fugiat omnis?
                </p>
                <Back />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Blackwidow;
