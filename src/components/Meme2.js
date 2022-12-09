import React from 'react'

import memeData from '../data/memeData'


export default function Meme2() {

  const [memeURL, setMemeURL] = React.useState(
    memeData.data.memes[Math.floor(
      Math.random() * memeData.data.memes.length)].url
    )

  const handleClick = () => {
    setMemeURL(memeData.data.memes[Math.floor(
      Math.random() * memeData.data.memes.length)].url)
  }

  const [topText, setTopText] = React.useState('')

  const topOnChange = () => {
    setTopText("a")
  }

  return (
    <div className='w-full h-full bg-violet-800 flex flex-col justify-start items-center'>
      <div className="w-8/12 flex items-center justify-between mt-20">
        <input type="text" placeholder="Top Text" className="h-8 w-5/12 rounded-md pl-8" onChange={topOnChange} />
        <input type="text" placeholder="Buttom Text" className="h-8 w-5/12 rounded-md pl-8" />
      </div>
      <button className="w-8/12 h-8 rounded-md bg-slate-400 mt-20" onClick={handleClick}
      >
        Click me to generate a meme image
      </button>
      <div className='relative'>
        <img src={memeURL} alt="#" className="absolute mt-20 max-h-96 -z-10" />
        <p className='absolute top-8 left-8'>{topText}</p>
      </div>
    </div>
  )
}