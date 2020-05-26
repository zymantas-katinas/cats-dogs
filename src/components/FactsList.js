import React, { useState, useEffect } from "react"
import axios from "axios"
import Fact from "./Fact"
import Pagination from "./Pagination"

const FactsList = (props) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [factsPerPage] = useState(10)

  const { animal } = props

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await axios("https://cat-fact.herokuapp.com/facts")
      setData(result.data.all)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    fetchData()
  }, [])

  const indexOfLastFact = currentPage * factsPerPage
  const indexOfFirstFact = indexOfLastFact - factsPerPage
  const currentFacts = data.slice(indexOfFirstFact, indexOfLastFact)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const allFacts = currentFacts.map((item) => (
    <Fact key={item.text} data={item} animal={animal} />
  ))

  return loading ? (
    <div className="loaderGif">
      {animal === "cat" ? (
        <img src="https://media.giphy.com/media/mFTRCmlZgMEr5CHmOV/giphy.gif"></img>
      ) : (
        <img src="https://www.petbarn.com.au/skin/frontend/enterprise/petbarn/images/dropdowns/dropdown_dog.gif"></img>
      )}
    </div>
  ) : (
    <div className="factsList">
      <h1>Facts for {animal} lovers</h1>
      <ul>
        <li className="factsList__headings">
          <div>Facts</div>
          <div>Votes</div>
        </li>
        {allFacts}
      </ul>
      <Pagination
        factsPerPage={factsPerPage}
        totalFacts={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}
export default FactsList
