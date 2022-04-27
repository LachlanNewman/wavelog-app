import axios from 'axios'
import { useEffect, useState } from 'react'
import Wave, { IWave } from '../components/Wave'

const Waves =() => {
  const [waves, setWaves] = useState<IWave[]>([])

  useEffect(() => {
    axios.get("http://localhost:4000/waves")
    .then(res => {
       setWaves(res.data)
    })
  },[])

  return (
    <div>
        <h1>Waves</h1>
        <ul>{waves.map((wave, i) => <Wave key={i} name={wave.name} longitude={wave.longitude} lattitude={wave.lattitude}/>)}</ul>
    </div>
  )
}

export default Waves
