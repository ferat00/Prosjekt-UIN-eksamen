/* 
Selve bildet som blir importert her er en screengrabb fra samme logo
som vi tok fra wireframes til oppgaven 
*/

import sirkler from '../image/sirkler.png'

const Hero = () => {
  return (
    <>
      <section className="section-hero" data-testid="hero">
        <div className='hero-tekst'>
          <cite className="tekst" data-testid="cite">
            «Vi tilbyr alle tjenester til alle mennesker over alt.<br/>
            Rett og slett best på tjenester.»
          </cite>
          <span className="CEO">CEO, Tjenesteweb</span>
        </div>
        <img src={sirkler} alt="sirkler"></img>
      </section>
    </>
  )
}

export default Hero