import React from 'react'

interface overViewPros {
    overview: string;
}

const SingleMovieOverView: React.FC<overViewPros> = ({overview}) => {
  return (
    <div className='single_page_overview'>
        <h3>Overview</h3>
        <p>{overview}</p>
    </div>
    
  )
}

export default SingleMovieOverView