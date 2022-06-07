//Nested object destructering: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
import { PortableText } from '@portabletext/react'
import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import PortableContent from '../components/PortableContent'
import Title from '../components/Title'
import { services } from '../data/services'
import { getBySlug, getTjeneste } from '../lib/services/getTjeneste'
import { BoxArticle } from '../styles/styled/BoxArticle'
import SingleBox from '../styles/styled/singleBox'
import { SingleBoxArticle } from '../styles/styled/SingleBoxArticle'

const SingleTjeneste = ({ tjeneste }) => {
  const { slug } = useParams()

  const single = tjeneste?.find((data) => data.slug === slug)

  const { title, slogan, preAmble, box, initialContent } = single

  const mapContent = initialContent?.map((item) => {
    return item
  })

  const [initialArray] = mapContent

  const { title: title2, text } = initialArray

  return (
    <>
      <SingleBoxArticle className="main-content" >
        <section className='singlebox'>
          <article>
            <h2 className="tjeneste-h2" data-testid="service_title">{title}</h2>
            <cite className='slogan'>«{slogan}»</cite>
            <section className='singleCEO'>
              <span>CEO, Tjenesteweb</span>
            </section>
            <section>
              <p className="singlep" data-testid="service_preamble">{preAmble}</p>
              <h3 className='title'>{title2}</h3>
              <p>{text}</p>
              <article className="portable" data-testid="service_text">
                {initialContent[0]._key ? <PortableContent data={single?.portable} /> : <p>No Portable in dummy content</p>}
              </article>
            </section>
          </article>
        </section>

        {/* 
SingleBox koden er hentet fra
https://xn--fullstkk-o0a.no/courses/sanity-events/09-styled-components/
 */}

        <SingleBox bg={box} />
      </SingleBoxArticle>
    </>
  )
}

export default SingleTjeneste
