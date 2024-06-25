import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/h' element={<Home/>}/>
        <Route path='/b' element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
