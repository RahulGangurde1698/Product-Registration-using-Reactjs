
import './App.css';
import Addproducts from './Components/Addproducts';
import Allproducts from './Components/Allproducts';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (




    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} /> 
     <Route path='/all' element={ <Allproducts/>} />
      <Route path='/add' element={ <Addproducts/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
