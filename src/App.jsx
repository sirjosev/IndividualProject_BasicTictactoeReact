import { useState } from 'react'

function Kotak({nilai, onKotakClick}) {

  return (
    <button className='kotak' onClick={onKotakClick}>{nilai}</button>
  )
}

export default function Papan() {
  const [kotaks, setKotaks] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextKotak= kotaks.slice();
    nextKotak[i] = 'X';
    setKotaks(nextKotak); 
  }

  return (
    <div className='board'>
      <Kotak value={kotaks[0]} onKotakClick={() => handleClick(0)}/> 
      <Kotak value={kotaks[1]}/> 
      <Kotak value={kotaks[2]}/> 
      <Kotak value={kotaks[3]}/> 
      <Kotak value={kotaks[4]}/> 
      <Kotak value={kotaks[5]}/> 
      <Kotak value={kotaks[6]}/> 
      <Kotak value={kotaks[7]}/> 
      <Kotak value={kotaks[8]}/> 
    </div>
  )
}

