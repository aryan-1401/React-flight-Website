// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGLobal} from 'react-icons/ai'
import {SIConsul} from 'react-icons/si'
import logo from '../../assets/logo.png'
import {CgMenuGridO} from 'react-icons/cg'


const Navbar = () => {

  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState('navBarMenu')
  // eslint-disable-next-line no-unused-vars
  const showNavBar = ()=>{
    setActive('navBarMenu showNavBar')
  }
  // eslint-disable-next-line no-unused-vars
  const removeNavBar = ()=>{
    setActive('navBarMenu showNavBar')
  }


  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SIConsul className='icon'/>
        </div>
        <div className='none flex'>
          <li className='flex'> <BsPhoneVibrate/>  Support</li>
          <li className="flx"> <AiOutlineGLobal/>  Languages</li>
        </div>

        <div className='atb flex'>
          <span>Sign in</span>
          <span>Sign out</span>
        </div>

      </div>
      <div className="navBarTwo">
        <div className="logoDiv">
          <img src={logo} className='Logo'/>
        </div>
        <div className={"active"}>
          <ul className='menu flex'>
            <li onClick={'removeNavBar'} className='listItem'>Home</li>
            <li onClick={'removeNavBar'} className='listItem'>About</li>
            <li onClick={'removeNavBar'} className='listItem'>Offers</li>
            <li onClick={'removeNavBar'} className='listItem'>Seats</li>
            <li onClick={'removeNavBar'} className='listItem'>Destinations</li>
          </ul>

          <button onClick={'removeNavBar'} className='btn flex btnOne'>
            Contact
          </button>
        </div>
        <button className='btn flex btnTwo'>
            Contact
          </button>

          <div onClick={'navBarMenu'} className='toggleIcon'>
            <CgMenuGridO className='icon'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
