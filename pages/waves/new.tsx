import { useState } from 'react'
import axios from 'axios'

const NewWave =() => {
    const [name, setName] = useState('')
    const [longitude, setLong] = useState('')
    const [lattitude, setLat] = useState('')

    const postWave = async () => {
        axios.post("http://localhost:4000/waves",
        {
                name,
                longitude,
                lattitude
        })
        .then(res => {
            console.log(res)
        })
    }

    return (
      <div>
          <h1>New Wave</h1>
            <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
            <input placeholder='Longitude' onChange={(e) => setLong(e.target.value)}></input>
            <input placeholder='Lattitude' onChange={(e) => setLat(e.target.value)}></input>
            <button onClick={() => postWave()}>Posts</button>
      </div>
    )
  }
  
  export default NewWave