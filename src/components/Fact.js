import React from "react"

const Facts = (props) => {
  const { data } = props
  return <li>{data.text}</li>
}
export default Facts
