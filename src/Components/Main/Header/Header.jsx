import React, { useContext } from 'react'
import { ThemeContext } from '../../../Theme'
import { BiSearch } from 'react-icons/Bi';
import { AiOutlineUser } from 'react-icons/Ai';
import { TbMessages } from 'react-icons/Tb';
import { IoAnalytics } from 'react-icons/io5';
import { HiOutlineMoon, HiOutlineLogout } from 'react-icons/Hi';
import { RiSettingsLine } from 'react-icons/Ri'
import Image2 from '../../../assets/user-pic.jpg';

const Header = () => {
    const { DarkTheme, setDarkTheme } = useContext(ThemeContext)

    const changeTheme = () =>{
        setDarkTheme(!DarkTheme);
    }
    return (
        <header className={`${DarkTheme && 'dark'}`}>
            <div className="searchbar">
                <input type="text" placeholder='search' />
                <BiSearch className="icon" />
            </div>

            <div className="tools">
                <AiOutlineUser className='icon'/>
                <TbMessages className='icon'/>
                <IoAnalytics className='icon'/>

                <div className="divider"></div>
                
                <HiOutlineMoon className='icon' onClick={changeTheme}/>
                <RiSettingsLine className='icon'/>
                <HiOutlineLogout className='icon'/>

                <div className="divider"></div>
                <div className="user">
                    <img src={Image2} alt="" className='profile-img' style={{width:"2vw"}} />
                </div>

            </div>

        </header>
    )
}

export default Header
