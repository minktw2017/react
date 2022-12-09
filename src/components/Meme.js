import React from "react"
import MemeData from "../data/memeData"


export default function Meme() {

  const geneMeme = () => {
    const MemeID = Math.floor(Math.random() * MemeData.data.memes.length)
    const memeURL = MemeData.data.memes[MemeID].url
    return memeURL
  }

  const [meme, setMeme] = React.useState(geneMeme())

  function handleClick() {
    setMeme(geneMeme())
  }

  function handleTop(e) {
    console.log(e)
  }

  // function add() {
  //   setCount(count + 1)
  // }

  // function minus() {
  //   setCount(count - 1)
  // }

  return (
    <div
      className="w-8/12 mx-auto mt-10"
    >
      <div
        className="w-full flex items-cnter justify-between text-slate-700"
      >
        <input
          type="text"
          placeholder="top text"
          className="pl-5 w-5/12 rounded-lg h-8 outline-0"
          onChange={handleTop}
        />
        <input
          type="text"
          placeholder="buttom text"
          className="pl-5 w-5/12 rounded-lg h-8 outline-0"
        />
      </div>
      <button
          className="w-full rounded-xl h-8 text-slate-700 bg-slate-300 mt-20"
          onClick={handleClick}
      >
        Click to generate a new meme image~
      </button>
      {/* <div className="relative block mt-10 w-60 h-60 mx-auto">
        <button
          onClick={add}
          className="absolute top-20 -left-10 w-20 h-20 flex items-center justify-center text-stone-800 bg-slate-300 text-3xl rounded-full z-10"
        >
          +
        </button>
        <div
          className="absolute top-0 left-0 h-60 w-60 rounded-full flex items-center justify-center text-stone-800 bg-fuchsia-300 font-extrabold text-3xl "
        >
          {count}
        </div>
        <button
          onClick={minus}
          className="absolute top-20 -right-10 w-20 h-20 flex items-center justify-center text-stone-800 bg-slate-300 text-3xl rounded-full z-10"
        >
          -
        </button>
      </div> */}
      <img
        src={meme}
        alt="Meme"
        className="mx-auto mt-10 max-w-full max-h-96"
      />
    </div>
  )
}