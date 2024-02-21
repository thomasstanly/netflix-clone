import React, { useEffect,useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    
    axios.get(`trending/movie/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const random = Math.floor(Math.random() * response.data.results.length)
      setMovie(response.data.results[random]) 
    }).catch((error)=>{
      console.error(error)
    })
  },[])

  
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='tittle'>{movie ? movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>
                {movie ? movie.overview : ''}
            </h1>
        </div>
        <div className="fade_button">

        </div>
    </div>
  )
}

export default Banner