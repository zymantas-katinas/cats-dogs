import React from "react"

const Facts = (props) => {
  const { data, animal } = props

  const mapObj = {
    cat: "dog",
    Cat: "Dog",
    dog: "cat",
    Dog: "Cat",
    purr: "bark",
    meow: "woof",
  }
  const dogText = data.text.replace(
    /\bcat|\bCat|\bdog|\bDog|\bpurr|\bmeow/gi,
    function (matched) {
      return mapObj[matched]
    }
  )

  return (
    <div>
      <hr />
      <li className="factsList__row">
        {animal === "dog" ? (
          <div className="factsList__fact">"{dogText}"</div>
        ) : (
          <div className="factsList__fact">"{data.text}"</div>
        )}
        <div>{data.upvotes}</div>
      </li>
    </div>
  )
}
export default Facts
