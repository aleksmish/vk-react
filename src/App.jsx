import './App.scss';
import Error from './routes/error/error.component';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
