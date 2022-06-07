import { useLocation, Link } from 'react-router-dom'
import { BoxArticle } from '../styles/styled/BoxArticle'
import Title from './Title';

const Card = ({ title, preAmble, slug, box }) => {
  
  /* 
  useLocation koden ble lest og lært på:
  https://v5.reactrouter.com/web/api/Hooks
  */
  let location = useLocation()
  return (
    <>
      <BoxArticle data-testid="service_wrapper" bg={box}>
        {/* title component */}
        <div className='boxArticle'>

          <Title title={title} />
          <p className="card-tekst" data-testid="services_preamble">{preAmble}</p>
          <Link
            to={
              !location.pathname.includes('/tjeneste')
                ? `tjeneste/${slug}`
                : `${slug}`
            }
          className="tilTjeneste">
            Til tjeneste
          </Link>
        </div>
      </BoxArticle>
    </>
  )
}

export default Card
