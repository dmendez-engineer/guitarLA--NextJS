import React from 'react'
import Image from 'next/image'
import logo from "../public/img/logo.svg"
import Link from 'next/link'
import styles from "../styles/header.module.css"
import {useRouter} from "next/router"
function Header() {
  
  const router=useRouter();
  
    return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            
            <Link href="/">
                <Image src="/img/logo.svg" width={300} height={40} alt='Imagen logotipo' />
            </Link>
            <nav className={styles.navegacion}>
                <Link href="/"  className={router.pathname==='/'?styles.active:''}>
                    Volver al inicio
                </Link>

                <Link href="/nosotros" className={router.pathname==='/nosotros'?styles.active:''}>
                    
                      Nosotros
                
                </Link>

                <Link href="/blog" className={router.pathname==='/blog'?styles.active:''}>
                      Blog
                </Link>

                <Link href="/tienda" className={router.pathname==='/tienda'?styles.active:''}>
                      Tienda
                </Link>

                <Link href="/carrito">
                    <Image width={30} height={25} src={"/img/carrito.png"} alt="Imagen carrito"/>
                </Link>

                
            </nav>
        </div>
    </header>
  )
}

export default Header