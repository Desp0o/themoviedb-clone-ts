
import React from 'react'
import { ResPannelSubLink } from './resPannelSubLink'
import { Link } from 'react-router-dom'

interface ResponsivePannelProps {
  pannelClass: string
}

export const ResponsivePannel: React.FC<ResponsivePannelProps> = ({pannelClass}) => {    
  return (
    <div className={pannelClass}>
        <div className='pannelLinks'>
            <ResPannelSubLink linkName='Movies'/>
            <ResPannelSubLink linkName='TV Shows'/>
            <ResPannelSubLink linkName='People'/>
            <Link className='pannelLinkA' to='/'>Contribution Bible</Link>
            <Link className='pannelLinkA' to='/'>Discussion</Link>
            <Link className='pannelLinkA' to='/'>Leadrboard</Link>
            <Link className='pannelLinkA' to='/'>API</Link>
            <Link className='pannelLinkA' to='/'>Support</Link>
            <Link className='pannelLinkA' to='/'>About</Link>
            <Link className='pannelLinkA' to='/'>Login</Link>
        </div>
    </div>
  )
}