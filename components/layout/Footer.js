import React from 'react'

function Footer() {
  return (
    <footer className='bg-slate-800 py-10  '>
      <div className='grid grid-cols-3 max-md:grid-cols-1 max-md:gap-10 max-md:justify-items-center container m-auto bg-slate-800 py-10 place-content-between '>
        <div className='text-center text-white centered'>
          <h3 className='font-cinzel text-2xl'>MARIUSZ NOWAK</h3>
          <p className=''>Usługi Glazurnicze</p>
          <img className='object-center hover:scale-105' src="/svg/Facebook2.svg"/>
          <p>Słopnice 1439</p>
          <p>Nip : 737 194 82 57</p>
        </div>
        <div className='text-white max-w-md col-span-1 px-2'>
          <h4 className='font-bold'>Swiadczymy usługi :</h4>
          <p>Świadczymy różnego typu usługi glazurnicze, układamy płytki ceramiczne w kuchniach, holach, balkonach, schodach, tarasach na powierzchniach wystawowych i w lokalach komercyjnych.</p>
        </div>
        <div className='flex text-white text-center gap-5 place-content-end'>
          <div className='centered ' >
          <a href='tel:+48 512803243'>
            <img src='/svg/IphoneX.svg' className='hover:scale-105 transition-all ease-in'/>
            Tel:512 803 243 </a>
          </div>          
          <div className='centered ' >
          <a href='mailto:nowakmariusz5225@gamil.com'>
            <img src='/svg/mail.svg' className='hover:scale-105 transition-all ease-in'/>
            nowakmariusz5225@gmail.com </a>
          </div>         
      
        </div>
      </div>
    </footer>
  )
}

export default Footer