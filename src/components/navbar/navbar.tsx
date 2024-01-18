import "./navbar.css"
import { useState } from "react"
import { Link } from 'react-router-dom'
import mainLogo from "../../assets/icons/mainLogo.webp"
import findIcon from "../../assets/icons/findIcon.webp"
import userIcon from "../../assets/icons/userIcon.webp"
import logoResp from "../../assets/icons/logoResponsive.webp"
import menuBars from "../../assets/icons/menuBars.webp"
import { NavLinks } from "./navLinks"
import { ResponsivePannel } from "./responsivePannel"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [activePannel, setActivePannel] = useState('responsivePannelClosed')

    const pannelTrigger = ()=> {
        if(isOpen){
            setIsOpen(false)
            setActivePannel('responsivePannelClosed')
        }else{
            setIsOpen(true)
            setActivePannel('responsivePannel')
        }
    }

  return (
   <>
    <div className='navbar'>
        <div className='navbarInner'>
            
            <div className='navLeft'>
                <Link to='/'>
                    <img className='logo' src={window.innerWidth > 768 ? mainLogo : logoResp} alt='moviedb' />
                </Link>

                <div className='nav-links'>
                    <NavLinks linkName='Movies'/>
                    <NavLinks linkName='TV Shows'/>
                    <NavLinks linkName='People'/>
                </div>

                <img src={menuBars} className='menuTrigger' alt='menu trigger' onClick={pannelTrigger}/>
               
            </div>

            <div className='navRigth'>
                
                {
                    window.innerWidth > 768 
                        ? 
                        <Link to='/pages/singleMoviePage/2'>Login</Link> 
                        : 
                        <Link to='/'> <img src={userIcon} alt='user' className='userResIcon'/> </Link>      
                }

                <img src={findIcon} alt='find' className='finIcon'/>
            </div>

        </div>
    </div>

    <ResponsivePannel pannelClass={activePannel}/>
   </>
  )
}