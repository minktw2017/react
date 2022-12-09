import torllface from "../icons/Trollface_non-free.png"


export default function Head() {
  return (
    <div
      className="bg-gradient-to-r from-violet-800 to-purple-600 h-14 flex justify-between items-center p-1 w-full"
    >
      <img
        src={torllface}
        alt="Trollface"
        className="w-12 h-12 mr-3"
      />
      <div className="flex justify-between items-center grow">
        <h2
          className="text-2xl font-black"
        >
          Meme Generator
        </h2>
        <h3>
          React Course - Project 3
        </h3>
      </div>
    </div>
  )
}