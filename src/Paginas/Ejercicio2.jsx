import {useState} from 'react'
import portada from '../imgs/portada.jpeg';
import steins1 from '../imgs/steins1.jpeg';
import steins2 from '../imgs/steins2.jpeg';
import steins3 from '../imgs/steins3.jpeg';


function Ejercicio2() {
  const imgsAnime = [portada,steins1, steins2, steins3];
  const [nroImgAnime, setNroImgAnime] = useState(0)

  function imgsAnimeiguiente() {
    if (nroImgAnime < imgsAnime.length - 1) {
      setNroImgAnime(nroImgAnime + 1)
    }
  }

  function imgAnimePrevia() {
    if (nroImgAnime > 0) {
      setNroImgAnime(nroImgAnime - 1)
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Steins Gate</h1>
      <p>
        <input type="button" value="<" onClick={imgAnimePrevia} />
        <input type="button" value=">" onClick={imgsAnimeiguiente} />
      </p>
      <p><img src={imgsAnime[nroImgAnime]} alt="anime" style={{ width: '70%' }} /></p>
      
    </div>
  );
}

export default Ejercicio2;
