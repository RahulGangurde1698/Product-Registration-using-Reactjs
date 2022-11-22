import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='body'>
      <h1>Please Add product</h1>
     <h1>
       <Link to="/add">Go To Add Product Page</Link>
      </h1>
    </div>
  )
}

export default Home