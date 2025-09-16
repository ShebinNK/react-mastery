import { useState } from 'react'

export default function MessageApp() {
  const [message, setMessage] = useState('')

  return (
    <div>
      <h2>Type a message:</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>You typed: {message}</p>
    </div>
  )
}
