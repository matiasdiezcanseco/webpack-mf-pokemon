import Footer from './Footer'
import Header from './Header'
import PokemonList from 'list/PokemonList'
import React from 'react'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-grow'>
        <PokemonList />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
