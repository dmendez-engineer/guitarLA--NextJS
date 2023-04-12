import React from 'react'
import Layout from "../components/layout"
import Link from "next/link"
export default function Page404() {
  return (
    <Layout title={'Error 404 - Pagina No Encontrada'}>
    
    <p className='error'>Pagina no encontrada</p>
    <Link  href='/' className="error-enlace">
    Ir al inicio
    </Link>
    </Layout>
  )
}

