import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

function Layout({children,title='',descripcion=''}) {
  return (
    
    <div>
    <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name='description' content={descripcion}/>
    </Head>
    <Header/>

    <h1>Desde layout</h1>
        {children}

    <Footer/>
    </div>
  )
}

export default Layout