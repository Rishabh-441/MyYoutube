import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btnText}) => {
  return (
    <Link to={`/searchpage?query=${btnText}`}>
      <div className='bg-gray-200 rounded-sm w-auto px-2 py-1 mx-2 cursor-pointer hover:bg-gray-400 whitespace-nowrap'>
        {btnText}
      </div>
    </Link>
  )
}

export default Button;
