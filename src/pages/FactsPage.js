import React, { useState } from "react"
import FactsList from "../components/FactsList"

function FactsPage(props) {
  const [animal, setAnimal] = useState("")

  if (animal) {
    return (
      <div className="container">
        <FactsList animal={animal} />
      </div>
    )
  } else {
    return (
      <div className="startScreen">
        <h1>
          I love
          <div onClick={() => setAnimal("dog")}> dogs </div>
          <div onClick={() => setAnimal("cat")}> cats </div>
        </h1>
        {/* <div>
          <button onClick={() => setAnimal("dog")}> dogs </button>
          <button onClick={() => setAnimal("cat")}> cats </button>
        </div> */}
      </div>
    )
  }
}

export default FactsPage
