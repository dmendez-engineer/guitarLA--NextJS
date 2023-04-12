import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import ListadoGuitarras from '@/components/listado-guitarras'
import styles from "../styles/grid.module.css"
export default function Tienda({guitarras}) {
  

  
  return (
    <div>
    <Layout
    title={'Tienda'}
    description={'Tienda de guitarras - INICIO'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        <div className={styles.grid}>
          {guitarras.map(guitarra=>(
            <ListadoGuitarras
            key={guitarra.id}
            guitarra={guitarra.attributes}
          />
          ))}
        </div>
      </main>
      
    </Layout>
    </div>
  )
}


/*
export async function getStaticProps(){
    const respuesta=await fetch(`http://127.0.0.1:1337/api/guitarras?populate=imagen`);
    const {data:guitarras}=await respuesta.json();

    //console.log(guitarras);
    return {
      props:{
        guitarras:guitarras
      }
    }
}
*/
export async function getServerSideProps(){
  const respuesta=await fetch(`http://127.0.0.1:1337/api/guitarras?populate=imagen`);
  const {data:guitarras}=await respuesta.json();

  //console.log(guitarras);
  return {
    props:{
      guitarras:guitarras
    }
  }
}


