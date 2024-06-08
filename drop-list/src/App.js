import './App.css';
import DropList from './components/jsx/DropList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/jsx/Navbar';

function App() {
  return (
    <div className='header'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<DropList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
