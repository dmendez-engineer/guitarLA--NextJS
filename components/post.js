import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import styles from "../styles/blog.module.css"
import { formatearFecha } from '../utils/helpers'

export default function Post({post}) {
    
    const {contenido,imagen,titulo,url,publishedAt}=post

 
    return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} alt={'Imagen blog'} width={600} height={400} />

        <div className={styles.contenido}>
            <h3>
                {titulo}
            </h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link href={`blog/${url}`} className={styles.enlace}>
                Leer post
            </Link>
        </div>
    </article>
  )
}

