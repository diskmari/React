
import MyComponent from '../components/MyComponent'
import Title from '../components/Title'
import './App.css'
import { useState } from 'react'

function App() {
  const n = 15
  const [name] = useState("Matheus")

  const redTitle = true





  return <div className='App'>
    {/* CSS global */}
    <h1>React com CSS</h1>
    {/* CSS de componente */}
    <MyComponent />
    <p>Este parágrafo é do App.js</p>
    {/* Inline css */}
    <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
    {/* css inline dinamico */}
    <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinamico</h2>

    <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinamico</h2>


    <h2
      style={
        name === "Matheus"
          ? { color: "green", backgroundColor: "#000" }
          : null
      }>
      
      Teste nome
    </h2>
    {/* Classe Dinamica */}
    <h2 className={redTitle ? "red-title" : "title" }>Este titulo vai ter classe dinamica</h2>
    {/* css modules */}
    <Title/>

  </div>


}

export default App
