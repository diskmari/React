
import MyForm from '../components/MyForm'
import './App.css'

function App() {

  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{ name: "Josias", email: "josias@gmail.com", bio: "Sou um advogado", role: "admin" }} />
    </div>

  )
}



export default App
