import React from 'react'
import Hero from './components/hero/Hero'
import CustomerAbout from './components/CustomerAbout'
import Realization from './components/realization/Realization'
import Services from './components/Services'
import Head from 'next/head'


function index() {
  return (
    <>
      <Head>        
        <meta charSet="utf-8"/>
        <meta name="description" content="Usługi glazurnicze" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="keywords" content="mn fliz, mn-fliz, usługi glazurnicze, układanie płytek, układanie glazury, układanie płytek słopnice, układanie płytek limanowa, glazurnik limanowa " />
        <title>MN-Fliz Mariusz Nowak</title>
      </Head>
      <Hero/>
      <CustomerAbout/>
      <Realization/>
      <Services/>
    </>
  )
}

export default index