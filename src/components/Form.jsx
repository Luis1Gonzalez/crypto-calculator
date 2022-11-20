import React, { useEffect, useState } from 'react'
import useSelectCurrency from '../hooks/useSelectCurrency'
import useTopCrypto from '../hooks/useTopCrypto'
import { coins } from '../data/coins'
import Error from './Error'


const Form = ({setSelectedCoins}) => {

const [coin, SelectCoins ] = useSelectCurrency('Elige una Moneda', coins);

const [result] = useTopCrypto()
const [cryptos, setCryptos] = useState([])
const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency('Elige una Criptomoneda', cryptos)
const [error, setError] = useState(false)

useEffect(() => {
   const buildTopTen = () => {
        const arrayTopTen = result.Data?.map(topTen => {

            const objectTopTen = {
                id: topTen.CoinInfo.Name,
                name: topTen.CoinInfo.FullName
            }
            return objectTopTen
        })

    setCryptos(arrayTopTen)
   }
   buildTopTen()
},[result])


const handleSubmit = (e) => {
e.preventDefault()

if([coin, cryptoCurrency].includes('')){
    setError(true)
    return
}
setError(false)
setSelectedCoins({
    coin,
    cryptoCurrency
})
}
  return (
    
    <div className='w-[100%]'>
        <form onSubmit={handleSubmit} className=''>

<SelectCoins />

<SelectCryptoCurrency />


<input type="submit" value="COTIZAR" className='bg-white w-[100%] my-8 rounded-md text-gray-900 font-bold cursor-pointer p-1.5'  />
        </form>
        {error && <Error>Selecciona una Moneda y una Criptomoneda</Error>}
    </div>
    
    
  )
}

export default Form