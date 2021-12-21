import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plants => setPlants(plants));
  }, [])

  const plantsToDisplay = plants.filter(plant => {
    const plants = plant.name.toLowerCase()
    const search = searchName.toLowerCase()

    if (searchName.length === 0) {
      return plant
    } else {
      return plants.includes(search)
    }
  })

  function setNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function deletePlant(deletedPlant) {
    const updatedPlants = plants.filter(plant => plant.id !== deletedPlant)
    setPlants(updatedPlants)
  }

  function updatePlantPrice(updatedPlant) {
    const updatedPlantPrice = plants.map(plant => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant
      } else return plant
    })
    setPlants(updatedPlantPrice)
  }

  return (
    <main>
      <NewPlantForm 
        onNewPlant={setNewPlant}
      />
      <Search 
        searchName={searchName}
        setSearchName={setSearchName}
      />
      <PlantList 
        plants={plantsToDisplay}
        updatePlantPrice={updatePlantPrice}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
