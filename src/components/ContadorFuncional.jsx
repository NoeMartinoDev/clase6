import React, { useState, useEffect } from 'react';

const ContadorFuncional = () => {
    
    const [ contador, setContador ] = useState(0);

    useEffect (() => {
        console.log("El componente se montó o se actualizó")
        return () => {
            console.log("El componente se desmontó")
        }
    }, [contador])

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
      if (contador > 0) {
        setContador(contador - 1);
      }
    }

    return (
        <div>
            <h1>Contador funcional: {contador}</h1>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </div>
    )
}

export default ContadorFuncional;