import './App.scss';
import Error from './routes/error/error.component';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ru from "antd/locale/ru_RU"

function App() {
  return (
    <ConfigProvider locale={ru}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
