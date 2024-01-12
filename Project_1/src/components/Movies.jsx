import React from 'react'

const Movies = (props) => {
  return (
    <div className='w-40 bg-white border-2 border-solid border-orange-300 font-semibold mb-2'>
      <img src={props.img} alt="" />
      <p>{props.title}</p>
      <p>Year: {props.year}</p>
    </div>
  )
}

export default Movies