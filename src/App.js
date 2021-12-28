import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CanvasPage from './pages/canvasPage';
import ImagePage from './pages/imagePage'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="app_wrap">
        <Routes>
            <Route path='/canvasPage' element={<CanvasPage />} />
            <Route path='/imagePage' element={<ImagePage />} />
            <Route path="*" element={<Navigate to="/imagePage"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
