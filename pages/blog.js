import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Post from '../components/post';
import styles from "../styles/grid.module.css"

export default function Blog({posts}) {
  
  console.log(posts);
  
  return (
   
    <Layout
    title={'Blog'}
    description={'Venta de guitarras - INICIO'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Blog</h1>
        <div className={styles.grid}> 
          {posts.map(post=>(
            <Post
            key={post.id}
            post={post.attributes}
            />
          ))}
        </div>
      </main>
      
    </Layout>
   
  )
}

export async function getStaticProps(){
  const respuesta=await fetch(`http://127.0.0.1:1337/api/posts?populate=imagen`);
  const resultado=await respuesta.json();
  const {data : posts}=resultado;
  console.log("BLOGSSSS");
  console.log(posts);

  return {
    props:{
      posts:posts
    }

}
}
/*
export async function getStaticProps(){

}*/