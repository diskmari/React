import { useState } from 'react'

import './App.css'
import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import Cardetails from './components/Cardetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  //const name = "Joaquim"
  const [username] = useState("Mari")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 3435},
    {id: 3, brand: "Renault", color: "Azul", newCar: true, km: 234},
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id: 1, name: "Matheus", job: "Programador", age :"31"},
    {id: 2, name: "Maria", job: "Vet", age :"35"},
    {id: 3, name: "Jose", job: "PPetista", age :"41"},
    {id: 4, name: "Miguel", job: "PPetista", age :"16"}
  ]

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
      {/*Destruturing*/}


      <Cardetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <Cardetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <Cardetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objeto */}
      {cars.map((car)=> (
        <Cardetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km}
       newCar={car.newCar}/>
      ))}
      {/* fragments  */}
      <Fragments propFragment="test"/>
      {/* children */}
      <Container myValue= "testing">
        <p>E este é o conteudo</p>

      </Container>
      {/* Executar funcao */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
        {/* desafio 4 */}
        {
          users.map((user) => (
            <UserDetails key={user.id}
            name={user.name}
            job={user.job}
            age={user.age}
            />
          ))
        }
     
      
    </div>
    
  )
}


export default App
