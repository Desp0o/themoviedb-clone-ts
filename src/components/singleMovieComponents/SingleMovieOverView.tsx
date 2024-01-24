import React from 'react'
import "./singleMovComp.css"

interface overViewPros {
    overview: string;
}

const SingleMovieOverView: React.FC<overViewPros> = ({overview}) => {
  return (
    <div className='single_page_overview'>
        <h3>Overview</h3>
        <p className='movie_overview'>{overview}</p>
    </div>
    
  )
}

export default SingleMovieOverView