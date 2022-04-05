import cardpay from '../../image/card.svg'
import cardpay1 from '../../image/card1.svg'
import cardpay2 from '../../image/card2.svg'
import cardpay3 from '../../image/card3.svg'
import cardpay4 from '../../image/card4.svg'
import cardpay5 from '../../image/card5.svg'
import cardpay6 from '../../image/card6.svg'
import cardpay7 from '../../image/card7.svg'
import {Link} from 'react-router-dom'

const Page1 = () =>{
    return (
        <section className="h-screen overflow-y-auto overflow-x-hidden overflow-hidden bg-gradient-to-b from-green-400 to-pink-400">
            <div className='p-4 text-center flex items-center justity-between'>
                <button className='p-1 m-auto text-[0.8rem] bg-white text-black rounded-[4px]'>
                    <Link to="/" >Quay về</Link>
                </button>
                <button className='p-1 m-auto text-[0.8rem] bg-black text-white rounded-[4px]'>
                    <Link to="/MuaCard2">Xem thêm sản phẩm</Link>
                </button>
            </div>
            <div className='p-4'>
                <div className="justify-between m-auto mb-[1rem] items-center align-center text-center flex text-black">
                    <div className="align-center  w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Thẻ Sim </span>
                        <img src={cardpay} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem]'>Mua</button>

                    </div>
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Thẻ Sim Xịn</span>
                        <img src={cardpay1} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem]'>Mua</button>
                    </div>
                    
                </div>
                <div className="justify-between  mb-[1rem] m-auto items-center align-center text-center flex text-black">
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Thẻ Infor Cá Nhân</span>
                        <img src={cardpay2} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem]'>Mua</button>
                    </div>
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Thẻ Infor Xịn Hơn</span>
                        <img src={cardpay3} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem]'>Mua</button>
                    </div>
                    
                </div>
                <div className="justify-between  mb-[1rem] m-auto items-center align-center text-center flex text-black">
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Thẻ Infor Vip</span>
                        <img src={cardpay4} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem]'>Mua</button>
                    </div>
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Thẻ Sim Visa</span>
                        <img src={cardpay5} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem]'>Mua</button>
                    </div>
                    
                </div>
                <div className="justify-between  mb-[1rem] m-auto items-center align-center text-center flex text-black">
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Thẻ Voucher</span>
                        <img src={cardpay6} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem]'>Mua</button>
                    </div>
                    <div className="align-center w-[49%] items-center bg-gradient-to-b from-blue-400  p-3 rounded-[1rem]">
                        <span>Thẻ Voucher</span>
                        <img src={cardpay7} className="w-[8rem] text-center h-[4rem] align-center" alt=""></img>
                        <button className='text-white bg-black p-2 rounded-[4px] text-[0.8rem]'>Mua</button>
                    </div>
                    
                </div>
            </div>
            
            
        </section>
    );
}

export default Page1 


