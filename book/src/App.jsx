import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    (async()=>{
     const {data} =  await axios.get('http://localhost:3000')
     setBooks(data)
    })()
  },[])
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://i.pinimg.com/564x/99/49/77/994977c48fde58ac674a2d05ba5a5efb.jpg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React + Node (Docker Compose)</h1>
     
      <ul>
        {
          books?.map((book)=>{
            return (
              <li key={book.id}>{book.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
