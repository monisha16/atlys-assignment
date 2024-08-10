import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AtlysModal from './components/AtlysModal';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/home' element={<AtlysModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
