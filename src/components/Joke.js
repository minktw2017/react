import React from 'react'
import { motion } from 'framer-motion'


export default function Joke(props) {
  return (
    <div
      className='w-full h-30 p-1 border-b border-stone-700'
    >
      <motion.h1
        whileHover={{ scale: 1.2 }}
      >
        Animation tutorial
      </motion.h1>
      <h1 className='text-2xl'>{props.setup}</h1>
      <h4 className='text-lg'>{props.on && props.delivery}</h4>

      <button
        className='px-2 py-1 bg-zinc-400 border-stone-400 hover:bg-zinc-600 rounded-md text-white'
        onClick={props.toggle}
        >
          {props.on ? "Hide" : "Show"} delivery
        </button>
    </div>
  )
}
