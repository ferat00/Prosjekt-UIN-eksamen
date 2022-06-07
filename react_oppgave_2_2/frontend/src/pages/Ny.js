import {hexColors} from '../data/services';
import {useState} from 'react';
import { createTjeneste } from '../lib/services/tjenesteService';
import { useNavigate } from 'react-router-dom';


const Ny = () => {
  const [title,setTitle] = useState('');
  const [slug,setSlug] = useState('');
  const [slogan,setSlogan] = useState('');
  const [initialContent,setInitialContent] = useState('');
  const [preAmble,setPreAmple] = useState('');
  const [box,setBox] = useState('');

/* 
useNavigate er lest og lært her:
https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
*/

  let navigate = useNavigate();

/* 
submitToSanity koden ble hentet fra:
https://xn--fullstkk-o0a.no/courses/sanity-events-2/02-sanity-create/
*/

  const submitToSanity = async (data) => {
     try {
       await createTjeneste(data)
     } catch (error) {
     }
   }

   const handleSubmit = (e)=>{
    e.preventDefault();
    let error = document.getElementById('error');
    let success = document.querySelector('#success');

    if(box === '' || title === '' || slug === '' || preAmble === '' || slogan === ''){
        error.style.display= "block";
    } else {
      createTjeneste({title, slug, slogan,preAmble,box});
      success.style.display = "block";
      error.style.display = "none";
      setTimeout(()=>{
        navigate('/tjeneste');
      },500);
    }
   }
  return (
    <>
    <div className="style">
      <h1 data-testid="title">Ny tjeneste</h1>
      <cite className='textlage'>«Hvis vi ikke har en tjeneste så lager vi en»</cite>
      <p className='textCEO'>CEO, tjenesteweb</p>
      <form data-testid="form" noValidate onSubmit={handleSubmit}>
        <label htmlFor="title">
          <span>Tittel*</span>
          
          <input data-testid="form_title" type="text" name="title" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        </label>
        <label htmlFor="slug">
          <span>Slug*</span>
          <input data-testid="form_slug" type="text" name="slug" id="slug" value={slug} onChange={(e)=>{setSlug(e.target.value)}} />
        </label>
        <label htmlFor="preAmble">
          <span>Ingress*</span>
          <input
            data-testid="form_preAmble"
            type="text"
            name="preAmble"
            id="preAmble"
            value={preAmble}
            onChange={(e)=>{setPreAmple(e.target.value)}}
          />
        </label>
        <label htmlFor="slogan">
          <span>Slogan*</span>
          <input
            data-testid="form_slogan"
            type="text"
            name="slogan"
            id="slogan"
            value={slogan}
            onChange={(e)=>{setSlogan(e.target.value)}}
          />
        </label>
        <label htmlFor="box" method="POST">
          <span>Farge på boks*</span>
          <select data-testid="form_box" name="box" id="box" value={box} onChange={(e)=>{setBox(e.target.value)}}>
            <option disabled value="">
              Velg hex-farge
            </option>
            {hexColors.map((hex) => {
              return <option key={hex} value={hex}>
              {hex}
            </option>
            })}
          </select>
        </label>
        <button data-testid="form_submit" type="submit">
          Lag tjeneste
        </button>
        <p data-testid="form_error" id="error">Fyll ut alle felter med *</p>
        <p data-testid="form_success" id="success">Skjema sendt</p>
      </form>
      </div>
    </>
  )
}

export default Ny
