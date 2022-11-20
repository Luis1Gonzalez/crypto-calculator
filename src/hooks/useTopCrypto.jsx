import { useEffect, useState } from "react"
import React from 'react'

const useTopCrypto = () => {
    const [result, setResult] = useState('')

useEffect(() => {
    const requestAPI = async () => {
const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=EUR'

const response = await fetch(url)
const result = await response.json()
setResult(result)
    }
    requestAPI()

},[])

  return [result]
}

export default useTopCrypto