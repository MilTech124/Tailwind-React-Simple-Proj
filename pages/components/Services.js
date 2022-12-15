import React from 'react'

function services() {
    const icons=[{
        iconUrl:'/svg/star.svg',
        head:'Jakość',
        desc:'Priorytetem w naszej działalności jest najwyższa jakość. Świadcząc usługi glazurnicze, dbamy o najdrobniejszy szczegół'
       },{
        iconUrl:'/svg/globe.svg',
        head:'Doświadczenie',
        desc:'Od 10 lat świadczymy usługi glazurnicze i pokrewne, doświadczenie pozwala nam lepiej zrozumieć oczekiwania naszych klientów.',
        right:true
       
       },{
        iconUrl:'/svg/work.svg',
        head:'Profesjonalne narzędzia',
        desc:'Korzystamy z elektronarzędzi, przecinarek i narzędzi ręcznych najlepszych światowych producentów, co wydatnie przekłada się na szybkość i jakość wykonania.'
       }
       ,{
        iconUrl:'/svg/time.svg',
        head:'Terminowość',
        desc:'Zawsze w sposób rzetelny i precyzyjny określamy termin wykonania, mając na względzie a Państwa wygodę, ale też troskę o zachowanie odpowiedniej jakości.',
        right:true
       
       },{
        iconUrl:'/svg/cash.svg',
        head:'Przejrzysta wycena',
        desc:'Każdorazowo przedkładamy dokładną i czytelną wycenę, która odzwierciedla całościową cenę prac, bez ukrytych kosztów'
       }
       ,{
        iconUrl:'/svg/fav.svg',
        head:'Zaangażowanie',
        desc:'Pracując nad danym projektem wkładamy w niego całe serce, ponieważ wierzymy, że nabywca będzie cieszył się danym wnętrzem przez następne lata.',
        right:true
       }
    ]
    const centered= {
        placeItems:'center'
    }
  return (
   <>
   <div className='grid grid-cols-2 max-sm:grid-cols-1 py-10 justify-items-center gap-0 max-w-7xl m-auto'>
    {icons.map(icon=>     
     (       
     <div key={icon.head} className={'smal-container max-sm:mb-5 lg:max-h-[135px] bg-zinc-600 py-4 flex max-w-xl px-2 ' + (icon.right ? 'lg:flex-row-reverse lg:text-left lg:mt-20' : 'lg:text-right')}>
        <div className='text-white '>
            <h3 className='text-xl font-bold '>{icon.head}</h3>
            <p>{icon.desc}</p>
        </div>        
    <img className='p-2' src={icon.iconUrl} alt={icon.head}/>
    </div>
    ))}


   </div>
   
   
   </>
  )
}

export default services