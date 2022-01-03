import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CanvasPage from './pages/canvasPage';
import ImagePage from './pages/imagePage'
import './App.css';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/canvasPage' element={<CanvasPage />} />
            <Route path='/imagePage' element={<ImagePage />} />
            <Route path="*" element={<Navigate to="/imagePage"/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
