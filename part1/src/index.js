import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  
  const name = "Isaac"
  const lastName = "Sosa"

  console.log("Hello from components")
  
  return (
    <div>
      <p>Hello {props.name} you're {props.age}</p> 
    </div>
  )
}

const App2 = () => {
  
  const age = 25;
  const name = "Modesto";

  return (
    <div>
      <h2>I'm learning React</h2>
      <App name="Isaac" age="21"/>
      <App name={name} age={age - 10}/>
    </div>
  )
}





// ReactDOM.render(<App />, document.getElementById('root')) 
ReactDOM.render(<App2 />, document.getElementById('root2')) 
