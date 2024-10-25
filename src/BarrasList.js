import React from "react";
import { useEffect, useState } from "react";
import BarrasDi from "./BarrasDi";

export default function BarrasList() {
  const [browse, setBrowse] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=QhvtMyC5VuUJ5uDWHnCulz37UYbjzWqkUSDJE2J9"
      );
      const data = await response.json();
      setBrowse(data.near_earth_objects);
    }

    fetchData();
  }, []);

  return (
    <div className="container bg">
      {browse.map((browse) => {
        return <BarrasDi key={browse.id} browse={browse} />;
      })}
    </div>
  );
}