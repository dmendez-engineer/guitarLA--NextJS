import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from "next/image"
import styles from "../styles/nosotros.module.css"
function Nosotros() {
  return (
    <div>
    <Layout
    title={'Nosotros'}
    description={'Venta de guitarras - INICIO'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        
          <div className={styles.contenido}> 
          <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800} />
            
          <div>
            <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          
        </div>
      </main>
      
    </Layout>
    </div>
  )
}

export default Nosotros