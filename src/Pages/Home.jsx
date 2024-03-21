import axios from 'axios';
import React, { useState } from 'react'

const Home = () => {
  let num = 2;
  const [numm, setNumm] = useState(num)
  const [ApiData, setApiData] = useState()
  const Api = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/`).then(res => res.data).then(data => setApiData(data))
    console.log(ApiData);
  }

  return (
    <div>
      <button onClick={() => setNumm(numm - 1)}>-</button>
      {numm}
      <button onClick={() => setNumm(numm + 1)}>+</button>
      <button onClick={() => Api()}>Api</button>
      {/* {ApiData} */}

      {

        ApiData ? ApiData.map((curElem, i) => {
          return (

            <h1 key={i}>{curElem.title}</h1>


          )
        }) :
          <p>no data avalaible</p>
      }


    </div >

  )
}

export default Home
