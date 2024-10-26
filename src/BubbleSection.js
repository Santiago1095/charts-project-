import React from "react";
import { useEffect, useState } from "react";
import BurbujasDi from "./BurbujasDi";

export default function BubbleSection() {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=QhvtMyC5VuUJ5uDWHnCulz37UYbjzWqkUSDJE2J9"
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
  }, []);

  return (
    <div className="container">
      <BurbujasDi data={asteroids}/> 
    </div>
  );
}
