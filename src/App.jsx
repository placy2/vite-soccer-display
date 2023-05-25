import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>
          Idea: simple page using nice css library - pulls data from soccer API <a href="https://api-football-standings.azharimm.dev/">linked here</a> and displays the leagues in a nicely paginated table.
          Afterwards, explore clicking into the leagues to pull data from the other endpoints documented here: <a href="https://github.com/azharimm/football-standings-api">Github</a>.
        </h1>
      </div>
    </div>
  )
}

export default App
