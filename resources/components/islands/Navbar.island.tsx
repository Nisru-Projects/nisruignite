/* eslint-disable max-len */
import { island } from '@microeinhundert/radonis'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="block md:hidden">
        <button
          onClick={toggle}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow md:flex md:items-center md:w-auto`}>
        <div className="text-sm md:flex-grow">
          <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4">
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default island('Navbar', Navbar)
