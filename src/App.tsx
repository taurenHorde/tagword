import './css/App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav';
import MainPage from './component/Main';

function App() {
  return (
    <div className="App flex jc-center ai-center">
      <div className='containWrap flex column jc-start ai-start'>
        <Nav />
        <Routes>
          <Route path='/' element={<MainPage />} />

        </Routes>

      </div>
    </div>
  );
}

export default App;
