import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, updatePlantPrice, deletePlant }) {
  return (
    <ul className="cards">
      {
        plants.map(plant => {
          return (
            <PlantCard 
              key={plant.id}
              id={plant.id}
              plantName={plant.name}
              plantPrice={plant.price}
              plantImage={plant.image}
              updatePlantPrice={updatePlantPrice}
              deletePlant={deletePlant}
            />
          )
        })
      }
    </ul>
  );
}

export default PlantList;
