import Content from './component/Content/Content';
import Navbar from'./component/Navbar/Navbar';
import Slogan from './component/Slogan/Slogan';
import Timer from './component/Timer/Timer';

import './App.js';
import './App.css';

const Home = () =>{
    return(
        <div className="text-25 overflow-y-auto overflow-x-hidden  font-sora text-white h-screen px-4 py-4 bg-gradient-to-b from-blue-800 to-pink-500 ">
            <Navbar/>
            <Timer/>
            <Slogan/>
            <Content/>
         </div>
        
    );
}
export default Home;