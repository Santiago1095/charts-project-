import React from "react";
import { useEffect, useState } from "react";
import BurbujasDi from "./BurbujasDi";

function Reset(props) {
  return (
    <div className="d-felx">
      <h1 className="text-center text-success">Chart Bubble Asteroids </h1>
      <h3 className="text-center text-success">Visual de 20 Asteroids </h3>
      <p>page: {props.page}</p>
      <div className="d-flex justify-content-between bg-primary align-items-center">
        <button className="btn btn-info"
         onClick={() => props.setPage(props.page+1)}>
          Reset Chart
        </button>


      </div>
    </div>
  );
}

export default function BubbleSection() {
  const [page, setPage] = useState([+0]);
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=4&api_key=QhvtMyC5VuUJ5uDWHnCulz37UYbjzWqkUSDJE2J9`
      );
      const data = await response.json();
      const datasets = data.near_earth_objects.map((asteroid) => {
        const diameter = Math.floor(
          (asteroid.estimated_diameter.kilometers.estimated_diameter_min +
            asteroid.estimated_diameter.kilometers.estimated_diameter_max) /
            2
        );

        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);

        return {
          x,
          y,
          r: diameter,
        };
      });

      setAsteroids(datasets);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container w-75">
      <Reset page={page} setPage={setPage}/>

      <BurbujasDi data={asteroids} />
    </div>
  );
}
