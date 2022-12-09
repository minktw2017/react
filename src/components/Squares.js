import React from 'react'
import '../css/square.css'
import boxes from '../data/boxes'
import Square from './Square'


export default function Squares() {

  // 1. generate squares list


  const [squares, setSquares] = React.useState(boxes)

  const squareList = squares.map(square => {
    return (
      <Square
        key={square.id}
        on={square.on}
      />
    )
  })

  return (
    <div className='test'>
      {squareList}
    </div>
  )
}
