import React from 'react'
import Link from 'next/link'
import {useRouter} from "next/router"
import styles from "../styles/footer.module.css"
function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                <Link href="/">
                    Volver al inicio
                </Link>

                <Link href="/nosotros">
                    
                    Nosotros
                
                </Link>

                <Link href="/blog">
                    Blog
                </Link>

                <Link href="/tienda">
                    Tienda
                </Link>

            
            </nav>
            <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
        
        </div>
    </footer>
  )
}

export default Footer