import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Layout from '../layout/Layout'
import Ny from '../pages/Ny'
import SingleTjeneste from '../pages/singleTjeneste'
import Tjenester from '../pages/Tjenester'

import { services } from '../data/services'
import Hero from '../components/Hero'

const RoutesPage = () => {
  const [tjeneste, setTjeneste] = useState(services)
  const [getWithSlug, setGetWithSlug] = useState(services)
  return (
    <>
      <div className="container">
        <div className='navHero'>
        <Navigation />
        <Hero/>
        </div>
        <Routes>
          <Route element={<Layout />}>
            <Route
                index
                element={
                  <Tjenester tjeneste={tjeneste} setTjeneste={setTjeneste} />
                }
              />
            <Route path="ny" element={<Ny />} />
            <Route path="tjeneste">
              <Route
                index
                element={
                  <Tjenester tjeneste={tjeneste} setTjeneste={setTjeneste} />
                }
              />
              <Route
                path=":slug"
                element={
                  <SingleTjeneste
                    tjeneste={tjeneste}
                    getWithSlug={getWithSlug}
                    setGetWithSlug={setGetWithSlug}
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default RoutesPage