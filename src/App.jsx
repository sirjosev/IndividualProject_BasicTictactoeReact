import { useState } from 'react'

function Kotak() {
  return (
    <button className='kotak'>X</button>
  )
}

function App() {

  return (
    <div className='board'>
      <Kotak /> 
      <Kotak /> 
      <Kotak /> 
      <Kotak /> 
      <Kotak /> 
      <Kotak /> 
      <Kotak /> 
      <Kotak /> 
      <Kotak /> 
    </div>
  )
}

export default App
