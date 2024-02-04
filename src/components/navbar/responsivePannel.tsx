
import React from 'react'
import { Link } from 'react-router-dom'

interface ResponsivePannelProps {
  pannelClass: string
}

export const ResponsivePannel: React.FC<ResponsivePannelProps> = ({pannelClass}) => {    
  return (
    <div className={pannelClass}>
        <div className='pannelLinks'>
            <Link to="./pages/PopularMovies/" >Movies</Link>
            <Link to="./pages/PopularMovies/" >TV Shows</Link>
            <Link to="./pages/PopularMovies/" >People</Link>
        </div>
    </div>
  )
}