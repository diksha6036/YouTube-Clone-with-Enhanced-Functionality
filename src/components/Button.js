import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='p-2 m-2 bg-gray-200 rounded-lg'>
        {props.name}
      </button>
    </div>
  )
}

export default Button
