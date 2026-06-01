import React from 'react'

function UseState (){
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

}
return(
    <>
        <h1>{counter}</h1>
      <button onClick={increment} style={{width:'200px' , backgroundColor:'blue'}}></button>
        <button onClick={decrement} style={{width:'200px' , backgroundColor:'red'}}></button>
        <button onClick={reset} style={{width:'200px' , backgroundColor:'green'}}></button>
    </>
)


export default UseState