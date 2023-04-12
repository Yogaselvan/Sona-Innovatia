import React,{useState} from 'react'

function App(){

  
  const handleclick=()=>{
    setValue(value+1);
  }
  const handleclick1=()=>{
    setValue(value-1);
  }
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Count - {value}</h1>
      <button onClick={handleclick1}>-</button>
      <button onClick={handleclick}>+</button>
      
    </div>
  )
}

export default App;