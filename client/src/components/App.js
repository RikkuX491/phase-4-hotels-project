import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import HotelsList from "./HotelsList"
import AddHotelForm from "./AddHotelForm"

function App() {

  const [hotels, setHotels] = useState([])
  const [formData, setFormData] = useState({
    name: ""
  })

  useEffect(() => {
    fetch('/hotels')
    .then(response => response.json())
    .then(hotelsData => setHotels(hotelsData))
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function addHotel(event){
    event.preventDefault()
    fetch('/hotels', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newHotel => setHotels([...hotels, newHotel]))
  }

  return <div>
    <HotelsList hotels={hotels}/>
    <AddHotelForm updateFormData={updateFormData} addHotel={addHotel}/>
  </div>;
}

export default App;
