import { Navbar } from './pages/navbar';
import { Home } from './pages/home/home';
import { Footer } from './pages/footer';
import { Women } from './pages/women';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const basename = process.env.BASENAME || "";
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/women" element={<Women/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
