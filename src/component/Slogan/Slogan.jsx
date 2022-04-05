import Cards from '../../image/isocard.svg'
import {Link} from 'react-router-dom'

const Slogan = () =>{
    return(
        <section className="text-25 my-10 font-extrabold">
            <div className="text-center">
                <p className="">Click in <span className="text-[0.9rem] text-red-600">START </span>to pay
                
                </p>
            
                <button className="z-5 text-14 px-6 py-[6px] mb-[1.1rem] font-bold mt-[20px] bg-gradient-to-b from-red-400 rounded-[14px] hover:bg-white hover:text-black duration-300" >
                    <Link to="/MuaCard">START</Link>
                </button>
            </div>
            <div className="flex items-center mb-[3.7rem] mt-[1.2rem] relative">
                <div className="w-[4.4rem] mb-[7rem] absolute h-14 rounded-[50%] bg-gradient-to-b from-blue-500 to-pink-500  ml-[60%]"></div>
                <img src={Cards} className=" absolute flex items-center" alt=""></img>
                <div className="w-[4.4rem]  h-14 rounded-[50%] bg-gradient-to-b from-blue-500 to-pink-500 mt-[4.5rem] "></div>
            </div>
            
        </section>
        
    );
}
export default Slogan;