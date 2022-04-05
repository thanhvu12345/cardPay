
import './App.css';
import Home from './Home.js';
import Page1 from './component/Animation/Page1';
import Page2 from './component/Animation/Page2';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    
        <Router>  
          
          <div className=''>
          <Routes>     
              <Route path="/" element={<Home/>}/>
              <Route path="/MuaCard" element={<Page1/>}/>
              <Route path="/MuaCard2" element={<Page2/>}/>
          </Routes>
          </div>
        </Router>
        
  );
}

export default App;
