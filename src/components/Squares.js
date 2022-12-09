import React from 'react'
import '../css/square.css'
import boxes from '../data/boxes'
import Square from './Square'


export default function Squares() {

  // 1. generate squares list
  // 2. toggle color

  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        return square.id === id ? {...square, 'on': !square.on} : square
      })
    })
  }

  const squareList = squares.map(square => {
    return (
      <Square
        key={square.id}
        on={square.on}
        toggle={()=>toggle(square.id)}
      />
    )
  })

  return (
    <div className='wrap'>
      {squareList}
    </div>
  )
}
