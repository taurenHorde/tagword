import './App.css';
import { Routes, Route } from 'react-router-dom'
import TitlePage from './component/titleComponent/Title';
import { MainPage, FcSocketIoFisrtGet } from './component/mainComponent/Main';
import HistoryPage from './component/historyComponent/History';
import ErrorPage from './component/commonComponent/Error';

function App() {

  return (
    <div className="App flex jc-center ai-center">
      <div className='containWrap flex column jc-start ai-start'>


        <Routes>
          <Route path='/' element={<TitlePage />} />
          <Route path='/:id' element={<FcSocketIoFisrtGet />}>
            {/* 위는 Ele 는 없고, 방 접속시 그 방 데이터 Socket 으로 받아오는 기능만 있음 */}
            <Route path='/:id/main' element={<MainPage />} />
            <Route path='/:id/history' element={<HistoryPage />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
