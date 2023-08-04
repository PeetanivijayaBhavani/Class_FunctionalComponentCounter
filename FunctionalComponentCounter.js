import React, { useEffect, useState } from 'react'

function FunctionalComponentCounter() {
    const[count,setcount]=useState(0);
useEffect(()=>{
    document.title=`count ${count} times`
})

  return (
    <div>
        <button onClick={()=>setcount(count+1)}>clicked {count} times</button>
    </div>
  )
}

export default FunctionalComponentCounter