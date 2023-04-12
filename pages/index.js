import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import ListadoGuitarras from "../components/listado-guitarras"
import Post from '../components/post'
import Curso from '../components/curso'
import styles from "../styles/grid.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Home({guitarras,post,curso}) {
  console.log(curso);
  return (
   <div>
      <Layout
      title={'Inicio'}
      description={'Venta de guitarras - INICIO'}
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

        <Curso 
        curso={curso}
        />

        <section className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div className={styles.grid}> 
          {post.map(post=>(
            <Post
            key={post.id}
            post={post.attributes}
            />
          ))}
        </div>
        </section>
       
      </Layout>
      
    </div>
  )
}

export async function getStaticProps(){
  const urlGuitarra=`http://127.0.0.1:1337/api/guitarras?populate=imagen`;
  const urlPosts='http://127.0.0.1:1337/api/posts?populate=imagen';
  const urlCurso='http://127.0.0.1:1337/api/curso?populate=imagen';
  
  const [resGuitarras,resPosts,resCurso]=await Promise.all([
    fetch(urlGuitarra),
    fetch(urlPosts),
    fetch(urlCurso)
  ]);
  const[{data:guitarras},{data:post},{data:curso}]= await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
    ]);
    return {
      props:{
        guitarras:guitarras,
        post:post,
        curso:curso
      }
    }
}