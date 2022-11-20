import React from 'react'
import { useState } from 'react'

const useSelectCurrency = (label, options) => {

const [state, setState] = useState('')

    const SelectCoins = () => (
<div className=' flex flex-col'>
<label className='my-2 font-black'>{label}</label>

<select  className='my-2 py-2'
value={state}
onChange={(e) => setState(e.target.value)
}>
<option>-- Seleccione --</option>

{options?.map(optionx =>(
<option
key={optionx.id}
>{optionx.id}</option>
))}
</select>
</div>
    )

  return [state, SelectCoins]
}

export default useSelectCurrency