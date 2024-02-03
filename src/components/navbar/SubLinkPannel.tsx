import React from 'react'
import { Link } from 'react-router-dom'

interface SubLinkPannelProps {
  link1: string,
  link2: string,
  link3: string,
  link4: string,
  path1: string,
}

export const SubLinkPannel: React.FC<SubLinkPannelProps> = ({link1, path1, link2, link3, link4}) => {
  return (
    <div className='subLinkPannel'>
      {link1 ? <Link to={path1} className='subLinkItem'>{link1}</Link> : <></>}
      {link2 ? <Link to='./pages/PopularMovies/' className='subLinkItem'>{link2}</Link> : <></>}
      {link3 ? <Link to='./pages/PopularMovies/' className='subLinkItem'>{link3}</Link> : <></>}
      {link4 ? <Link to='./pages/PopularMovies/' className='subLinkItem'>{link4}</Link> : <></>}
    </div>
  )
}