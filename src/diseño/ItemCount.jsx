import React, { useState } from 'react'

export default function ItemCount({inicial, max}) {
  const [count, setCount] = useState(inicial)
  
  const sumar = () => {
    count < max ?  setCount(count + 1) : alert ("No puede agregar mas al carrito")
  }
  const restar = () => {
    count > inicial ? setCount(count - 1) : alert ("No puedes quitar mas productos")
  }
  const reset = () => {
   setCount(inicial)
  }

  return (
    <div className="botonesCarrito">

       <h5>{count}</h5>
       <button className="btn btn-quaternary" onClick={sumar}>+</button>
       <button className="btn btn-quaternary" onClick={reset}>Reset</button>
       <button className="btn btn-quaternary" onClick={restar}>-</button>

    </div>
  )
}