import React from 'react'
import { useParams } from 'react-router-dom'


const Param = () => {

    const {param} = useParams();
    console.log(param, typeof param, isNaN(+param));
    if (isNaN(+param)) {
  return <div><h1>The Word is: {param}</h1></div>
    } else {
        return <div>The Number is: {param}</div> 
    }
  
};

export default Param;