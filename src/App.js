import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Back from "./components/Back";
import { Data } from "./components/Data";

import MovieCard from "./components/MovieCard";

import "./components/MovieCard.css";
import Blackwidow from "./pages/Blackwidow";

function App() {
  const [addTodatat, setaddTodatat] = useState(Data);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MovieCard
                addTodatat={addTodatat}
                setaddTodatat={setaddTodatat}
              />
            }
          />
          <Route
            path="/movie/:name"
            element={<Blackwidow data={addTodatat} />}
          />
          <Route path="/" element={<Back />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
