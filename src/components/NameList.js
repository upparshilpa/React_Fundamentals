import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark' , 'Diana', 'Bruce']
    const persons =[
         {
             id: 1,
             name: 'Bruce',
             age: 30,
             skill: 'React'

    },
    {
        id:1,
        name: 'clark',
        age:25,
        skill: 'Angular'
    },
    {
        id:3,
        name:'Diana',
        age:20,
        skill:'Java'
    }
]
    
     const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2> )
    return <div>{nameList}</div>
       
    
}

export default NameList
