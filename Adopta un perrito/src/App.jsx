import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Titulo from './components/Header'
import Tarjeta from './components/Card'
import Tag from './components/Tags'
import Footer from './components/Footer'

function App() {

  return (
   
    <div className='container'>
      <Titulo Titulo='Adopta un perrito'/>

    <div className='cartas img'>
      <Tarjeta url = './src/assets/img/perrito_00.jpg' name ='Bartolo' description='Una mezcla tierna llena de curiosidad. Pelaje suave y ojos brillantes. Ideal para un hogar amoroso y paciente.' fondo='success' texto ='Mezcla'/>
      <Tarjeta url = './src/assets/img/perrito_01.jpg' name ='Gohan' description='Protector y gentil, mezcla con una mirada profunda. Listo para largos paseos y momentos de tranquilidad.'fondo='info' texto ='Criollo'/>
      <Tarjeta url = './src/assets/img/perrito_02.jpg' name ='Goku' description='Cachorro lleno de energía y alegría. Perfecto para familias activas y amantes de la diversión.' fondo='danger' texto ='Cruzado'/>
      <Tarjeta url = './src/assets/img/perrito_03.jpg' name ='Nunu' description='Pequeño y cariñoso perrito color canela. Busca un regazo cálido y un hogar amoroso.' fondo='secondary' texto ='Cruzado'/>
   
    </div>

      <footer className='m-5'>
        <Footer />
      </footer>
    </div>
  )
}

export default App



