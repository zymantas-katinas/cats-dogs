import React, { useState } from "react"
import FactsList from "../components/FactsList"

function FactsPage(props) {
  const [animal, setAnimal] = useState("")

  if (animal !== "") {
    return (
      <div className="container">
        <FactsList animal={animal} />
      </div>
    )
  } else {
    return (
      <div className="startScreen container">
        <h1>
          I love
          <div onClick={() => setAnimal("dog")}> dogs </div>
          <div onClick={() => setAnimal("cat")}> cats </div>
        </h1>
      </div>
    )
  }
}

export default FactsPage
