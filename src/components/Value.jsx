import React from 'react'
import  ServerStyleSheet  from "styled-components";


const Text = ServerStyleSheet.div`
box-shadow: 10px 10px 36px -10px #ffff9c;
border-radius: 20px;
margin:12px;
padding:15px;
transition: all .2s ease-in-out;
display: flex;
justify-content: space-between;

&:hover{
    transform: scale(1.05);
}
`
const Button = ServerStyleSheet.button`
 
  background-color: red;
  color:#fff;
  font-size:medium;
  boder-style:none;
  border-radius:20px;
   
   &:active{
   background-color: #4C9F40;
   }
   `

const Value = ({Value,onClickRemove}) => {
  return (
    <Text>
      {Value}
      <Button onClick={onClickRemove}>delete</Button>
    </Text>
    
  )
}

export default Value
