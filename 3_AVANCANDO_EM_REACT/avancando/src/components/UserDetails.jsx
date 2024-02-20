
const UserDetails = ({ name, age, job }) => {
    return (
    <div>
      <h2>Habilitacao</h2>
      <ul>
          <li>Nome: {name}</li>
          <li>Idade: {age}</li>
          <li>Profissao: {job}</li>
          {age >=18 ? (
            <p>Pode tirar a hab</p>
          ) : (
            <p>Menor de idade</p>
          )}
      </ul>
    </div>
    )
  }
  

export default UserDetails