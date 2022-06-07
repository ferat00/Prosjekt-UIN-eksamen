import React from 'react';
import { useState } from 'react';
import Layout from './components/Layout';
import Title from './components/Title';
import Flavours from './components/Flavours';
import IceCream from './components/IceCream';

export default function App() {
  // TODO: Gjør nødvendige endringer slik at 'Chocolate' vise i tittel når applikasjonen starter
  const [flavour, setFlavour] = useState('Chocolate')
  // TODO: Gjør nødvendige endringer slik at bakgrunnen på isen er chocolate når applikasjonen starter
  const [css, setCss] = useState('')

  // TODO: Gjør om til komponenter. HINT: Se på testid navnene som matcher krav til komponenter
  return (
 <>
 <Layout>
   <section id="options" data-testid="options">
    <Title flavour={flavour} />
    <Flavours setFlavour={setFlavour} setCss={setCss} />
   </section>
   <main>
     <IceCream css={css} />
   </main>
 </Layout>
 </>
  )
}
