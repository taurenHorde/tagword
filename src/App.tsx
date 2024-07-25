import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav';
import TitlePage from './component/Title';
import MainPage from './component/mainComponent/Main';
import HistoryPage from './component/historyComponent/History';


function App() {

  return (
    <div className="App flex jc-center ai-center">
      <div className='containWrap flex column jc-start ai-start'>
        {/* <Nav /> */}
        <Routes>

          <Route path='/' element={<TitlePage />} />

          {/* <Route path='/' element={<MainPage />} />
          <Route path='/history' element={<HistoryPage />} /> */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
