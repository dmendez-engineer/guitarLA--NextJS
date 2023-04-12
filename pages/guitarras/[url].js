import {React, useState} from 'react'
import {useRouter} from "next/router"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"
export default function Producto({guitarraSeleccionada,agregarCarrito}) {
    
    const[cantidad,setCantidad]=useState(0);

    const {nombre,descripcion, imagen,precio} = guitarraSeleccionada[0].attributes;

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(cantidad<1){
            alert("Cantidad no válida");
            return;
        }

        //Construir objeto
        const guitarraComprar={
            id:guitarraSeleccionada[0].id,
            imagen:imagen.data.attributes.url,
            nombre:nombre,
            precio:precio,
            cantidad:cantidad
        }
        agregarCarrito(guitarraComprar);
    }

    return (
        <Layout title={'Guitarra seleccionada'}>
            <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.url} alt={'Imagen de guitarra'} width={600} height={400}/>

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <form className={styles.formulario}
                onSubmit={handleSubmit}
                >
                    <label htmlFor='cantidad'>Cantidad:</label>
                    <select id='cantidad'
                    onChange={(e)=>setCantidad(Number(e.target.value))}
                    >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type='submit' value="Agregar al carrito"/>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticPaths(){
   //console.log("PATHS: ");
    const respuesta=await fetch("http://127.0.0.1:1337/api/guitarras");
    const {data}=await respuesta.json();
   
    const paths=data.map(guitarra=>({
        params:{
            url:guitarra.attributes.url
        }
    }));
    
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{url}}){
 
  
    const respuesta=await fetch(`http://127.0.0.1:1337/api/guitarras?filters[url]=${url}&populate=imagen`);
    const {data:guitarraSeleccionada}=await respuesta.json();

    return {
        props:{
            guitarraSeleccionada:guitarraSeleccionada
        }
    }
}

/*
export async function getServerSideProps({query:{url}}){//The "query" variable is an Object attribute that is automatically send by parameter in this method,
                                                            so, I applied destructuring 
    
    const respuesta=await fetch(`http://127.0.0.1:1337/api/guitarras?filters[url]=${url}&populate=imagen`);
    const {data:guitarraSeleccionada}=await respuesta.json();

    return {
        props:{
            guitarraSeleccionada:guitarraSeleccionada
        }
    }
}*/