import memeData from "../../data/memeData"

export default function Meme() {
  const handleClick = () => {
    const memeArray = memeData.data.memes
    let randomNumber = Math.floor(Math.random() * memeArray.length)
    console.log(randomNumber)
  }
  return (
    <main
      className="w-11/12 mx-auto pt-10 flex flex-col justify-center items-center"
    >
      <form
        action="#"
        className="w-full flex flex-col"
      >
        <div className="w-full flex justify-between">
          <div className="flex justify-center items-center grow">
            <input
              type="text"
              placeholder="left"
              className="placeholder:text-gray-500 focus:outline-none border border-gray-500 rounded-xl h-12 w-160 px-5"
            />
          </div>
          <div className="flex justify-center items-center grow">
            <input
              type="text"
              placeholder="right"
              className="placeholder:text-gray-500 focus:outline-none border border-gray-500 rounded-xl h-12 w-160 px-5 "
            />
          </div> 
        </div>
        <button
          className="h-12 w-160 flex justify-center items-center rounded-xl bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 text-zinc-50 m-10"
          onClick={ handleClick }
        >
          Get a new meme image
        </button>
      </form>
      <img
        src="https://i.imgflip.com/30b1gx.jpg"
        alt="#"
        className="mx-auto w-50"
      />
    </main>
  )
}