import React from "react"
import jokes from "../data/jokes"
import Joke from "./Joke"


export default function JokeTutourial() {

  // 1. list the titles of jokes
  // 2. Pass the setup and delivery
  // 3. Set delivery not show initially

  const jokeElements = jokes.map(joke => {
    return {
      "id": joke.id,
      "setup": joke.setup,
      "delivery": joke.delivery,
      "on": false
    }
  })

  const [Jokes, setJokes] = React.useState(jokeElements)

  function toggle(id) {
    setJokes(prevJoke => {
      return (prevJoke.map(joke => {
        return joke.id === id ? {...joke, on:!joke.on} : joke
      }))
    })
  }

  const jokeList = Jokes.map(joke =>
      <Joke
        key={joke.id}
        setup={joke.setup}
        delivery={joke.delivery}
        on={joke.on}
        toggle={() => toggle(joke.id)}
      />
    )

  return (
    <div className="w-11/12 mx-auto mt-10 bg-slate-300 p-1 flex flex-col justify-start items-start">
      {jokeList}
    </div>
  )
}