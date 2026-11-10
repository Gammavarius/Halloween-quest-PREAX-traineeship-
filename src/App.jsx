import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import { StartScreen, SceneScreen, FinalScreen  } from '@/pages';

function App() {

  return (
    <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartScreen/>} />
            <Route path="/scene/:sceneId" element={<SceneScreen/>} />
            <Route path="/ending/:endingId" element={<FinalScreen/>} />
          </Routes>
        </BrowserRouter>
    </GameProvider>
  );
}

export default App;