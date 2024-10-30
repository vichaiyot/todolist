import React from 'react'
import Value from './Value'

const Say = ({todo,removeTodo})=> {
  return (
    <section>
    {todo.map((t,indx)=>{
        return(
        <Value Value={t} key={indx} onClickRemove={() =>removeTodo(indx)}/>
        )
      })}
    </section>
  )
}

export default Say
