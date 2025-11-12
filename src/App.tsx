
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomepPage from './pages/Home'


function App() {

  return (
    <BrowserRouter
      {...({
        future: {
          v7_relativeSplatPath: true,
        },
      } as any)}
    >
      <Routes>
        <Route path='/' element={<HomepPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App