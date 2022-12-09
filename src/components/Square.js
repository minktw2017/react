import React from 'react'


export default function Square(props) {

  const styles = {
    "backgroundColor": props.on ? "#222222" : "transparent"
  }

  return (
    <div className='square' style={styles} onClick={props.toggle}></div>
  )
}
