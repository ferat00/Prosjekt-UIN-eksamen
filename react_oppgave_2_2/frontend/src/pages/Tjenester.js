//Search filter: https://www.youtube.com/watch?v=mZvKPtH9Fzo&ab_channel=PedroTech

import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BoxArticle } from '../styles/styled/BoxArticle'
import { TjenesteSection } from '../styles/styled/TjenesteSection'
import { getTjeneste } from '../lib/services/getTjeneste'
import Card from '../components/Card'
import Filter from '../components/Filter'


const Tjenester = ({ tjeneste, setTjeneste }) => {
  const [search, setSearch] = useState('')
 
  let location = useLocation();

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

/* 
Deler av funksjonen getData under fant vi fra:
https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
spesifikt uniqueTjeneste koden
*/

  const getData = async () => {
    try {
      const data = await getTjeneste();
      if (data.length > 0) {
        let newTjeneste = [...tjeneste, ...data];
        function uniqueTjeneste(arr, key) {
          return [...new Map(newTjeneste.map(item => [item[key], item])).values()]
      }
      
      setTjeneste(uniqueTjeneste(newTjeneste, 'title'));

      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <>
      <section className="tjeneste-container" data-testid="services">
          <h2 className="tjeneste-h2" data-testid="title">Alle tjenester</h2>
        <div className="tjeneste-header">
          <label htmlFor="search">
            <input
              className='input-tjenester'
              onChange={handleInput}
              value={search}
              data-testid="search"
              id="search"
              name="search"
              type="search"
              placeholder="Søk etter tjenester her"
            />
          </label>
        </div>
        <Filter tjeneste={tjeneste} search={search} />
      </section>
    </>
  )
}

export default Tjenester;
