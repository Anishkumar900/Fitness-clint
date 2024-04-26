import Main from './HomePage/Main';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SheoharMain from './sheohar/SheoharMain';

function App() {
  return (
    <>
    <BrowserRouter basename='/Fitness-clint'>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/bihar/sheohar' element={<SheoharMain/>}></Route>
      </Routes>
    </BrowserRouter>
    
      {/* <p className='text-3xl'>hello</p>
      Hello world! */}
  
    
    </>
  );
}

export default App;
