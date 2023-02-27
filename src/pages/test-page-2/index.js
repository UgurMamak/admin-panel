import React, { useEffect, useLayoutEffect, useState } from 'react';
import UMInput from 'components/input';

export default function Index2() {

  const [count, setCount] =useState(0);

  const clickHAndle =()=>{
    setCount(count=>count+1)
    console.log('button clicked')
  }


  useEffect(()=>{
    console.log("Button clicks",count);
  },[count]);

  console.log('App rendered')

  return (
    <div>
      <button onClick={clickHAndle}>HHH</button>
    </div>
  )
}
