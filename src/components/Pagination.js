import React from "react"

const Pagination = ({ factsPerPage, totalFacts, currentPage, paginate }) => {
  const pageNumbers = Math.ceil(totalFacts / factsPerPage)

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 3 ? (
          <li key={1} className="pagination__list">
            <a onClick={() => paginate(1)} href="!#">
              first page
            </a>
          </li>
        ) : null}

        {currentPage > 2 ? (
          <li key={currentPage - 2} className="pagination__list">
            <a onClick={() => paginate(currentPage - 2)} href="!#">
              {currentPage - 2}
            </a>
          </li>
        ) : null}

        {currentPage > 1 ? (
          <li key={currentPage - 1} className="pagination__list">
            <a onClick={() => paginate(currentPage - 1)} href="!#">
              {currentPage - 1}
            </a>
          </li>
        ) : null}

        <li className="pagination__list current"> {currentPage} </li>

        {currentPage < pageNumbers ? (
          <li key={currentPage + 1} className="pagination__list">
            <a onClick={() => paginate(currentPage + 1)} href="!#">
              {currentPage + 1}
            </a>
          </li>
        ) : null}

        {currentPage < pageNumbers - 1 ? (
          <li key={currentPage + 2} className="pagination__list">
            <a onClick={() => paginate(currentPage + 2)} href="!#">
              {currentPage + 2}
            </a>
          </li>
        ) : null}

        {currentPage < pageNumbers - 2 ? (
          <li key={pageNumbers} className="pagination__list">
            <a onClick={() => paginate(pageNumbers)} href="!#">
              last page
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

export default Pagination
