import { island } from '@microeinhundert/radonis'
import { useState } from 'react'

function SomeInteractiveIsland () {
  const [count, setCount] = useState(0)

  function handleClick () {
    setCount(count + 1)
  }

  return <button type="button" onClick={handleClick}>Click me {count}</button>
}

// The first argument should be a unique name for the island
export default island('SomeInteractiveIsland', SomeInteractiveIsland)
