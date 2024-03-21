import axios from 'axios';
import React from 'react'

const Dinamic = () => {

    const Api = async () => {
        const url = `https://jsonplaceholder.typicode.com/todos/`;
        const data = await axios.get(url)
        const res = await data.json()
        console.log(res);
    }

    Api()
    return (
        <div>Dinamic</div>
    )
}

export default Dinamic