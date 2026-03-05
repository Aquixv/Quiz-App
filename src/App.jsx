import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Setup from './Pages/Setup'
import Quiz from './Pages/Quiz'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
  {/* Change "/Home" to "/" */}
  <Route path="/" element={<Home />} /> 
  <Route path="/setup" element={<Setup />} />
  <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App