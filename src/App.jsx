import React, {useState} from 'react'
import Say from './components/Say';
import  ServerStyleSheet  from "styled-components";

const Input = ServerStyleSheet.input`
  height: 15px;
  margin: 15px;
  border-radius:20px;
  border-color:#eeeeee;
  boder-style:solid;
  box-shadow: 10px 10px 36px -10px #ffff9c;
  padding: 15px;
  font-size: large;
`

const Button = ServerStyleSheet.button`
  padding: 15px;
  background-color: #4CAF50;
  color:#fff;
  font-size:medium;
  boder-style:none;
  border-radius:20px;
   box-shadow: 10px 10px 36px -10px #ffff9c;
   outline:none;

   &:active{
   background-color: #4C9F40;
   }
`
const H1 = ServerStyleSheet.h1`
font-size:56px;
`

function App() {
 
  const [todo , setTodo] = useState([]);
  const [text , setText] = useState("");
  
  // const changeText = (e) => setText(e.target.value) วิธีที่ 1
  const changeText = ({target :{value}}) =>{
    setText(value)
    console.log(value);
    
  }// วิธีที่ 2

  const addtask = () =>{
    setTodo([
      ...todo,
      text
    ])
    setText("")// เคลียinput
  }

  const removeTodo = (index)=>{
    console.log(index);

    let todo1 = [...todo];

    todo1.splice(index,1)
    setTodo(todo1)
    
  }
  return (
    <div>
        <H1>TODOLIST..</H1>
        <Input type="text" value={text} onChange={changeText}/>
        <Button onClick={addtask}>Add task</Button>

       <Say todo={todo} removeTodo={removeTodo}/>
    </div>
    
  )
}

export default App
