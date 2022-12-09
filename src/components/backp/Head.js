import trollFace from "../icons/Trollface_non-free.png"

export default function Head() {
  return (
    <div className="w-screen h-14 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 flex justify-start items-center text-zinc-50 px-4">
      <img
        src={trollFace}
        alt="Trollface_non-free"
        className="w-11 h-11"
        />
      <h3 className="text-2xl font-bold pl-4">
        MEMI Generator
      </h3>
      <h4 className="text-lg font-semibold ml-auto">
        React Course - Project 3
      </h4>
    </div>
  )
}