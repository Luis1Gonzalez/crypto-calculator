import { useState, useEffect } from 'react'
import Form from './components/Form'
import Panel from './components/Panel'
import Spinner from './components/Spinner'
import logo from './assets/logo.png'



function App() {
  const [selectedCoins, setSelectedCoins] = useState({})
  const [resultx, setResultx] = useState({})
  const [charging, setCharging] = useState(false)

  useEffect(() => {
    if (Object.keys(selectedCoins).length > 0) {
      

      const CalculateValues = async () => {

setCharging(true)

        const {coin, cryptoCurrency} = selectedCoins

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${coin}`

        const response = await fetch(url)
        const result = await response.json()

        setResultx(result?.DISPLAY[cryptoCurrency][coin])

        setCharging(false)

      }
      CalculateValues()
    }
  }, [selectedCoins])

  
  return (
    <div className="bg-sky-900 p-3 h-full text-yellow-500 flex flex-col items-center min-w-[320px] md:text-3xl">
      
      <div className='h-[130px]'>
        <img className='h-[100%]' src={logo} alt="logo de la app" />
      </div>
      
      <h1 className='text-2xl text-center my-4 font-black'>Cotiza Criptomonedas al Instante</h1>
      
      
      <Form
        setSelectedCoins={setSelectedCoins}
      />

{charging && <Spinner />}

      {resultx.PRICE && <Panel 
      resultx={resultx}
      />}

    </div>
  )
}

export default App
