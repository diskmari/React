import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique aqui para executar a funçao</button>
    </div>
  )
}

export default ExecuteFunction