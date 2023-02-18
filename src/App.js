import { Navbar } from './componentes/navbar';
import { Home } from './componentes/home/home';
import { Footer } from './componentes/footer';
import { Women } from './componentes/women';
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
