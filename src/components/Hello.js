import React from 'react'

const Hello = () => {
  //  return ( 
    //<div>
      //  <h1> Hello Guys</h1>
        //</div>
//)
//}
//export default Hello
return React.createElement (
    'div',
    {id: 'hello' , className: 'dummyClass' },
    React.createElement('h1' , null , 'Hello Shilpa')

)
}
export default Hello