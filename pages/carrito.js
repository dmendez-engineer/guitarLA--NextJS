import Layout from '@/components/layout'
import {React,useState,useEffect} from 'react'
import styles from "../styles/carrito.module.css"
import Image from "next/image"


export default function Carrito({carrito,actualizarCantidad,eliminarProducto}) {
  
    const[totalAPagar,setTotalAPagar]=useState(0);
    
    useEffect(()=>{
        const calculoTotal=carrito.reduce( (total,productoActual)=> total+(productoActual.cantidad*productoActual.precio),0 );
        setTotalAPagar(calculoTotal);
        
    },[carrito]);
    

    return (
    <Layout
    title='Carrito de compras'
    >
    <main className='contenedor'>
        <h1 className='heading'>Carrito</h1>

        <div className={styles.contenido}>
            <div className={styles.carrito}>
                <h2>Artículos</h2>
                {carrito.length===0?'Carrito vacío':(
                    carrito.map(producto=>(
                        <div
                        key={carrito.id}
                        className={styles.producto}
                        >
                            <div>
                                <Image width={250} height={480} src={producto.imagen} alt={producto.nombre} />
                            </div>
                            <div>
                                <p className={styles.nombre}>{producto.nombre}</p>
                                
                                <div className={styles.cantidad}>
                                <p>Cantidad: </p>
                                    <select
                                    className={styles.select}
                                    value={producto.cantidad}
                                    onChange={(e)=>actualizarCantidad({
                                        id:producto.id,
                                        cantidad:Number(e.target.value)
                                    })}
                                    >
                                        
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>

                                <p className={styles.precio}>$ <span>{producto.precio}</span></p>

                                <p className={styles.subTotal}>Subtotal: $ <span>{producto.precio*producto.cantidad}</span></p>
                            </div>
                            <button className={styles.eliminar}
                            type="button"
                            onClick={()=>eliminarProducto(producto.id)}
                            >X</button>
                        </div>
                    ))
                )}
            </div>
            <aside className={styles.resumen}>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: $ {totalAPagar} </p>
            </aside>
        </div>
    </main>
    </Layout>
  )
}
