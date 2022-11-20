import React from 'react'


const Panel = ({ resultx }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultx

    return (
        <div className='flex flex-col justify-center items-center mb-5 sm:flex-row w-[100%] sm:justify-around'>
            <div className='sm:w-[20%]'>
            <img className='h-[130px] mb-5 sm:w-[100%]' src={`http://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            </div>

            <div className='sm:w-[70%]'>
                <p className='text-xl'>El Precio es de: <span className='text-2xl text-red-200'>{PRICE}</span></p>
                <p className='my-2'>El Precio mas alto del día: <span className='text-lg text-red-200'>{HIGHDAY}</span></p>
                <p className='my-2'>El Precio mas bajo del día: <span className='text-lg text-red-200'>{LOWDAY}</span></p>
                <p className='my-2'>Variación últimas 24 horas: <span className='text-lg text-red-200'>{CHANGEPCT24HOUR}</span></p>
                <p className='my-2'>Ultima actualización: <span className='text-lg text-red-200'>{LASTUPDATE}</span></p>
            </div>
        </div>
    )
}

export default Panel