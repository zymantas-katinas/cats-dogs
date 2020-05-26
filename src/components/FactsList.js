import React, { useState, useEffect } from "react"
import axios from "axios"
import Fact from "./Fact"
import Loader from "./Loader"

const FactsList = () => {
  const [catData, setCatData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://cat-fact.herokuapp.com/facts")
      setCatData(result.data.all)
    }
    fetchData()
  }, [])

  const allFacts = catData.map((item) => <Fact key={item.text} data={item} />)

  return (
    <div>
      <ul>{allFacts}</ul>
    </div>
  )
}
export default FactsList
