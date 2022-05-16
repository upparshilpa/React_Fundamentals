import React from 'react'

 // function Greet() {
    
  // return <h1>Hello Everyone</h1>
//}
const Greet = props => {
const {name , MovieName} = props
return (
  <div>

 <h1>Hello {name} a.k.a {MovieName} </h1>
 
 </div>
)
} 
export default Greet