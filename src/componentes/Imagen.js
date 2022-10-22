import React from 'react'
import topo from '../assets/topo.png'

export default function Imagen() {
  var valor = 0;  
  const incrementa = () => {
    console.log('click')
    valor += 1;
    console.log(valor)
  }

  return (
    <img src={topo} onClick={incrementa}  alt="imagen" />
  )
}
