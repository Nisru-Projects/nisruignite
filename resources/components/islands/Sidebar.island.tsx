import { island } from '@microeinhundert/radonis'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Sidebar = ({ isAdmin }: { isAdmin: boolean }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className={ `mt-8 ${!isOpen ? '-translate-x-full' : ''} fixed inset-y-0 left-0 w-64 bg-gray-800
      px-8 py-4 transform transition-transform duration-200 ease-in-out h-full overflow-y-auto` }>
        <h1 className="text-2xl font-bold text-white mb-4">Logo</h1>
        <ul>
          {isAdmin && (
            <li>
              <a
                className="text-purple-400 hover:text-pink font-medium block py-2"
                href="/dashboard/admin"
              >
                Admin
              </a>
            </li>
          )}
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
      <button
        className="absolute left-0 bottom-0 px-3 py-2 text-gray-400 hover:text-gray
          focus:outline-none transition-all duration-300 border border-gray-400 rounded"
        onClick={handleToggle}
      >
        {!isOpen ? <FaBars /> : <FaTimes />}
      </button>
    </>
  )
}

export default island('Sidebar', Sidebar)
