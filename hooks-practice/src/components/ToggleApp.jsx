import { useState } from 'react'

export default function ToggleApp() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Text
      </button>
      {visible && <h2>Now you see me!</h2>}
    </div>
  )
}
