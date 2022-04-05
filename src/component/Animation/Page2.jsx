import phone from '../../image/phone.svg'
import phone1 from '../../image/phone1.svg'
import phone2 from '../../image/phone2.svg'
import phone3 from '../../image/phone3.svg'
import phone4 from '../../image/phone4.svg'
import phone5 from '../../image/phone5.svg'
import phone6 from '../../image/phone6.svg'
import phone7 from '../../image/phone7.svg'
import {Link} from 'react-router-dom'
const Page2 = () =>{
    return (
        <section className="h-screen overflow-y-auto overflow-x-hidden overflow-hidden bg-gradient-to-b from-black to-yellow-400">
            <div className='p-4 text-center flex items-center justity-between'>
                <button className='p-1 m-auto text-[0.8rem] bg-white text-black rounded-[4px]'>
                    <Link to="/MuaCard" >Quay về </Link>
                </button>
                <button className='p-1 m-auto text-[0.8rem] bg-red-400 text-white rounded-[4px]'>Xem mục tiếp theo</button>
            </div>
            <div className='p-4'>
                <div className="justify-between m-auto mb-[1rem] items-center align-center text-center flex text-black">
                    <div className="align-center  w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Phone mua 1 tặng 0 </span>
                        <img src={phone} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem] mt-2'>Mua</button>
                    </div>
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Phone có google map </span>
                        <img src={phone1} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem] mt-2'>Mua</button>
                    </div>
                    
                </div>
                <div className="justify-between  mb-[1rem] m-auto items-center align-center text-center flex text-black">
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Phone có food </span>
                        <img src={phone2} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem] mt-2'>Mua</button>
                    </div>
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Phone có love</span>
                        <img src={phone3} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem] mt-2'>Mua</button>
                    </div>
                    
                </div>
                <div className="justify-between  mb-[1rem] m-auto items-center align-center text-center flex text-black">
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Phone có home </span>
                        <img src={phone4} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem] mt-2'>Mua</button>
                    </div>
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Phone có menu</span>
                        <img src={phone5} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem] mt-2'>Mua</button>
                    </div>
                    
                </div>
                <div className="justify-between  mb-[1rem] m-auto items-center align-center text-center flex text-black">
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Phone có gương</span>
                        <img src={phone6} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem] mt-2'>Mua</button>
                    </div>
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Phone có cây thông </span>
                        <img src={phone7} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem] mt-2'>Mua</button>
                    </div>
                    
                </div>
            </div>
            
            
        </section>
    );
}

export default Page2 


