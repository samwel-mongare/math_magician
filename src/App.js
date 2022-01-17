import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/pages/Quotes';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';

function App() {
  const fonty = {
    fontSize: '2rem',
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/Calculator"
          element={(
            <div className="letty">
              <h2 style={fonty}>Let&apos;s do some math!!!</h2>
              <div className="calculator-container">
                <Calculator />
              </div>
            </div>
    )}
        />
        <Route
          path="/"
          element={
            <Home />
    }
        />
        <Route
          path="/Quotes"
          element={
            <Quotes />
    }
        />
      </Routes>
    </>
  );
}

export default App;
