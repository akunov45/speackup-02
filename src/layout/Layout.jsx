import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'
import Header2 from '../components/Header2/Header2'
import HomePage from '../components/HomeNews/HomeNews'
import Cards from '../components/Cards/Cards'
import Blue from '../components/Blue/Blue'


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
