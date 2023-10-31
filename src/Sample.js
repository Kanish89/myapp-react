import React, { useState } from 'react'

 function Sample() {
    const[const1,setcounts1]=useState(0);
    function myfun()
    {
        setcounts1(const1+1);
    }
    function myfun1()
    {
        setcounts1(const1-1);
    }
  return (
    <div>
      <button onMouseOver={myfun}>increase</button>
      <span>{const1}</span>
      <button onMouseOver={myfun1}>decrese</button>
    </div>
  )
}
export default Sample