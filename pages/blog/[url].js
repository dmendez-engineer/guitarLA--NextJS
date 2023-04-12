import React from 'react'
import Image from "next/image"
import styles from "../../styles/blog.module.css"
import Layout from "../../components/layout"
import { formatearFecha } from '@/utils/helpers'


export default function SelectedBlog({blogSeleccionado}) {
  console.log("Blog Seleccionado",blogSeleccionado);
  const {titulo,contenido,imagen,publishedAt}=blogSeleccionado[0].attributes;  
  return (
    <Layout
    title={'Blogs'}>
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url} alt={'Imagen blog'} width={1000} height={600} />

            <div className={styles.contenido}>
                <h3>
                    {titulo}
                </h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
                
            </div>
        </article>
    </Layout>
  )
}

export async function getServerSideProps({query:{url}}){

    const respuesta=await fetch(`http://127.0.0.1:1337/api/posts?filters[url]=${url}&populate=imagen`);
    const {data:blogSeleccionado}=await respuesta.json();

    return {
        props:{
            blogSeleccionado:blogSeleccionado
        }
    }

}
 