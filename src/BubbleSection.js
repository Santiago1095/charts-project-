import React from "react";
import { useEffect, useState } from "react";
import BurbujasDi from "./BurbujasDi";
import BubbleAsteroid from "./BubbleAsteroid";

function Reset(props) {
  return (
    <div className="d-felx">
      <h1 className="text-center text-primary">Chart Bubble Asteroids </h1>
      <h3 className="text-center text-primary">Visual de 20 Asteroids </h3>
      <p> Actual page: {props.page}</p>
      <div className="d-flex justify-content-between align-items-center py-4">
        <button
          className="btn btn-info bg-primary  border-primary"
          onClick={() => props.setPage(props.page - 1)}
        >
          Back
        </button>

        <button
          className="btn btn-info bg-primary  border-primary "
          onClick={() => props.setPage(props.page - 1)}
        >
          Reset
        </button>

        <button
          className="btn btn-info bg-primary  border-primary"
          onClick={() => props.setPage(props.page - 1)}
        >
          Mayor a Menor
        </button>

        <button
          className="btn btn-info bg-primary  border-primary"
          onClick={() => props.setPage(props.page - 1)}
        >
          Menor a Mayor
        </button>

        <button
          className="btn btn-info bg-primary  border-primary"
          onClick={() => props.setPage(props.page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function BubbleSection() {
  const [page, setPage] = useState(0);
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=2&api_key=QhvtMyC5VuUJ5uDWHnCulz37UYbjzWqkUSDJE2J9`
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
    <div className="container  w-75">
      <Reset page={page} setPage={setPage} />
      <BurbujasDi data={asteroids} />
      <BubbleAsteroid/>
    </div>
  );
}
