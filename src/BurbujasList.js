import React from "react";
import { useEffect, useState } from "react";
import BurbujasDi from "./BurbujasDi";

export default function BurbujasList() {
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
    <div className="container bg-success">
      {browse.map((browse) => {
        return <BurbujasDi key={browse.id} browse={browse} />;
      })}
    </div>
  );
}