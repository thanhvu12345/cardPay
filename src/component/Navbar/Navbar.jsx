import { useState } from "react";
import {HiOutlineMenu} from "react-icons/hi"
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {GiCoolSpices} from 'react-icons/gi'
import {RiSunFoggyFill} from 'react-icons/ri'
import {AiFillApple} from 'react-icons/ai'
// import {useDarkMode} from '../../useDarkMode'

const Navbar = () => {
    
    // const [isDarkMode,toggleDarkMode] = useDarkMode();
    const [openMenu,setOpenMenu] = useState(false);
    const handleMenu = ()=>{
        setOpenMenu(!openMenu);
    }
    return (
        <nav className="flex items-center ">
            <div className="flex ">
                    <AiFillApple  
                    size={"1.5rem"} 
                    className="cursor-pointer text-red-400"/>
                <div className="font-bold text-[1rem] mr-2">ApplePay</div>
                    <RiSunFoggyFill  size={"1.4rem"} className="text-yellow-400 cursor-pointer"/>
            </div>
            <ul className="ml-auto text-25 items-center">
                {openMenu ? (
                    <AiOutlineClose 
                     size={'28px'} 
                     className="text-white cursor-pointer"
                      onClick={handleMenu} />
                ): (
                    <HiOutlineMenu  
                    size={"28px"} 
                    onClick={handleMenu} color="white"
                     className="cursor-pointer"/>

                )}
                {openMenu &&(
                    <div className="absolute right-8 bg-black  text-[1rem]">
                        <div className="mr-auto ml-auto p-2 flex">
                            <FaFacebookSquare size={"24px"} className=" text-blue-500"/>
                            <a href="https://www.facebook.com/maidaothanhvu" className="text-white ml-1 text-[0.8rem] ">Facebook</a>
                        </div>
                        <div className="mr-auto ml-auto p-2 flex">
                            <BsYoutube size={"24px"} className=" text-red-500"/>
                            <a className="text-white ml-1 text-[0.8rem]  " href="https://www.youtube.com/c/VdevCode/featured">Youtube</a>
                        </div>
                        <div className="mr-auto ml-auto p-2 flex">
                            <GiCoolSpices size={"24px"} className=" text-white"/>
                            <p className="text-white ml-1 text-[0.8rem] ">Website Anime</p>
                        </div>
                    </div>
                
                    
                )}
            </ul>
        </nav>
    );
}

export default Navbar;