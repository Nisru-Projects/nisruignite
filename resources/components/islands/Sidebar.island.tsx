import { island } from '@microeinhundert/radonis'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* <div
        className={`fixed left-0 top-0 bottom-0 bg-gray-900 w-64 p-8 transition-all duration-300 ${
          !isOpen ? '-translate-x-full' : ''
        } inset-y-0`}
      > */}
      <nav className={ `mt-8 ${!isOpen ? '-translate-x-full' : ''} fixed inset-y-0 left-0 w-64 bg-gray-800 px-8 py-4 transform transition-transform duration-200 ease-in-out` }>
        <ul>
          <li>
            <a
              className="text-gray-400 hover:text-white font-medium block py-2"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-white font-medium block py-2"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-white font-medium block py-2"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-white font-medium block py-2"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* </div> */}
      <button
        className="absolute left-0 bottom-0 p-4 text-purple-400 hover:text-purple
          focus:outline-none transition-all duration-300"
        onClick={handleToggle}
      >
        {!isOpen ? <FaBars /> : <FaTimes />}
      </button>
      {/* {!isOpen && (
        <button
          className="absolute left-0 bottom-0 p-8 text-gray-400 hover:text-purple focus:outline-none
          transition-all duration-300"
          onClick={handleToggle}
        >
          <FaBars />
        </button>
      )} */}
    </>
  )
}

export default island('Sidebar', Sidebar)
