import { island } from '@microeinhundert/radonis'
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <a
              className="text-gray-800 hover:text-gray-500"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-gray-500"
              href="#"
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Adicione aqui o menu que aparece quando a tela está em tamanho menor que md */}
      {isOpen && (
        <div className="md:hidden bg-white w-full">
          <ul className="flex flex-col items-center">
            <li>
              <a
                className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                href="#"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default island('Navbar', Navbar)

