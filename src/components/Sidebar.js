import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    //Early return pattern
    if(!isMenuOpen) return null;
  return (
    <div className='shadow-lg w-52 z-10 bg-white'>
      <div>
        <ul className='pl-5 pb-5'>
            <li className='py-2'><Link to="/">Home</Link></li>
            <li className='py-2'>Shorts</li>
            <li className='py-2'>Subscriptions</li>
        </ul>
        <hr  />
      </div>
      <div>
        <h1 className='font-bold pt-5 pb-2 pl-2'>You &#62;</h1>
        <ul className='pl-5 pb-5'><li className='py-2'>Your Channel</li>
        <li className='py-2'>History</li>
        <li className='py-2'>Your Videos</li>
        <li className='py-2'>Watch Later</li>
        <li className='py-2'>Downloads</li>
        <li className='py-2'>Show More</li></ul>
        <hr />
      </div>
      <div>
        <h1 className='font-bold pt-5 pb-2  pl-2'>Subscriptions</h1>
        <ul className='pl-5 pb-5'>
            <li className='py-2'>Vikas Divyakriti</li>
        <li className='py-2'>MahiNergy</li>
        <li className='py-2'>Lakshay Chaudhary</li>
        <li className='py-2'></li>Nitest Rajput</ul>
      </div>
    </div>
  )
}

export default Sidebar
