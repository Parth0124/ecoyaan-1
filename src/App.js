import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './PAGES/HomePage/Home'
import About from './PAGES/About/About';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
<Route
          path="*"
          element={
            <div>
              <h1>404 NOT FOUND</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;