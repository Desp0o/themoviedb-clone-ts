import React, { useState } from 'react'
import { SubLinkPannel } from './SubLinkPannel'

interface NavLinksProps {
    linkName: string
}

export const NavLinks: React.FC<NavLinksProps> = ({linkName}) => {

    const [isHovered, setIsHovered] = useState(false)

    const mouseOn = ()=> {
        setIsHovered(true)
    }

    const mouseOut = ()=> {
        setIsHovered(false)
    }

    const link = linkName
    let link1Name = ''
    let link2Name = ''
    let link3Name = ''
    let link4Name = ''
    let path1Name = './pages/PopularMovies/'


    if(link === 'Movies'){
        link1Name = 'Popular'
        path1Name = './pages/PopularMovies/'
        link2Name = 'Now Playing'
        link3Name = 'Upcoming'
        link4Name = 'Top Rated'
    }else if(link ==='TV Shows'){
        link1Name = 'Popular'
        link2Name = 'Airing Today'
        link3Name = 'On TV'
        link4Name = 'Top Rated'
    }else if(link === 'People'){
        link1Name = 'Popular People'
        link2Name = ''
        link3Name = ''
        link4Name = ''
    }

  return (
    <div className='navLinkParent' onMouseEnter={mouseOn} onMouseLeave={mouseOut}>

        <p className='navbarLink'>{link}</p>
        {
            !isHovered 
                ? <></> 
                : <SubLinkPannel 
                    link1={link1Name}
                    path1={path1Name}
                    link2={link2Name}
                    link3={link3Name}
                    link4={link4Name}
                  />}
    </div>      
  )
}