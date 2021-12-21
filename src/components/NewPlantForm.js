import React, { useState } from "react";

function NewPlantForm({ onNewPlant }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  function handleForm(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      "name": formData.name,
      "image": formData.image,
      "price": formData.price
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
    .then(r => r.json())
    .then(newPlant => onNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleForm} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleForm} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleForm} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
