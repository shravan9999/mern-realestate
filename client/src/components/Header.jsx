import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Urban</span>
            <span className='text-slate-700'>Shelter</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg'>
            <input 
            type="text" 
            placeholder='Search...' 
            className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FontAwesomeIcon icon={faSearch} className='text-slate-600'/>
        </form>
        <nav>
          <ul className='flex gap-4 items-center'>
            <li className='hidden sm:inline'>
              <a href='/' className='text-slate-700 hover:underline'>
                Home
              </a>
            </li>
            <li className='hidden sm:inline'>
              <a href='/about' className='text-slate-700 hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='/signin' className='text-slate-700 hover:underline'>
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
