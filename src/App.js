import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Developer from './components/Developer/Developer';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer/:developerId" element={<Developer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
