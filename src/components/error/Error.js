import React from 'react'
import {Link } from 'react-router-dom'

function Error() {
  return (
    <div> 404 not found  

        <button type='button'>
        <Link to ='/' > go back to home </Link>
        </button>

    </div>
  )
}

export default Error