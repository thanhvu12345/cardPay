import {ImUserCheck} from 'react-icons/im'
import {FcSimCardChip} from 'react-icons/fc'
import {RiHeartsFill} from 'react-icons/ri'

const Content = ()=>{
    return(
        <section className="">
            
            <div className="ml-auto mr-auto text-bold bg-black ">
                <div className="flex p-2 m-auto">
                    <ImUserCheck size={'1.2rem'} className='text-green-400'/>
                    <p className='text-[0.8rem] ml-auto text-roboto'>quantity purchased:</p>
                    <p className='text-[0.8rem] ml-auto'>
                        [ 24 ] 
                    </p>
                </div>
                <div className="flex p-2 m-auto">
                    <FcSimCardChip size={'1.2rem'} className='text-green-400'/>
                    <p className='text-[0.8rem] ml-auto text-roboto'>card purchased:</p>
                    <p className='text-[0.8rem]  ml-auto'>[ 14 ]</p>
                </div>
                <div className="flex p-2 m-auto">
                    <RiHeartsFill size={'1.2rem'} className='text-red-500'/>
                    <p className='text-[0.8rem] ml-auto text-roboto'>love website:</p>
                    <p className='text-[0.8rem] ml-auto'>[ 19 ]</p>
                </div>
            </div>
        </section>
    );
}
export default Content;