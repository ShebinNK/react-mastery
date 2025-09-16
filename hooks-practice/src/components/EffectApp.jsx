import { useState, useEffect } from 'react'

export default function EffectApp() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])

  return (
    <div>
      <h2>Fetched Posts:</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
