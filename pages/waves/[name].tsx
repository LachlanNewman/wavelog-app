import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {IWave} from '../../components/Wave'

const Page = () => {
    const router = useRouter()
    const { name } = router.query
    const [wave ,setWave] = useState<IWave>(null)

    const fetchWave = (name: string| string[]) => {
        axios.get(`http://localhost:4000/waves/${name}`)
        .then(res => {
           setWave(res.data)
        })
    }

    useEffect(() => {
      if (router.isReady) {
        const {name} = router.query
        fetchWave(name)
      }
    },[router.isReady])

    const waiting = () => {
      return (
        <div>
          <h1>
            Waiting
          </h1>
      </div>
      )
    }

    const showWave = () => {
      return (
        <div>
        <main>
          <h1>{wave.name}</h1>
          <p>Longitude: {wave.longitude}</p>
          <p>Latitude: {wave.lattitude}</p>
        </main>
      </div>
      )
    }

    if(wave){
      return showWave()
    }
    else{
      return waiting()
    }
}

export default Page