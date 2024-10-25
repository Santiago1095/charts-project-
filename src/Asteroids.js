import React from "react";

export default function Asteroids({ browse }) {
  return (
    <div className="py-5">
      <h2>Id:{browse.id}</h2>
      <h2>Name:{browse.name}</h2>
      <h2>First Observation:{browse.orbital_data.first_observation_date}</h2>
      <h2>Diameter Min:{browse.estimated_diameter.kilometers.estimated_diameter_min}</h2>
      <h2>Diameter Max:{browse.estimated_diameter.kilometers.estimated_diameter_max}</h2>
    </div>
  );
}
