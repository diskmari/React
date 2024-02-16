import { useState } from 'react'

import './App.css'
import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'

function App() {
  const name = "Joaquim"
  const [username] = useState("Mari")

  return (

    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="city" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <ShowUserName name={username} />
    </div>
  )
}


export default App
