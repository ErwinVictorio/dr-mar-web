
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UnderMaintenance from './components/UnderMaintenance'

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
        <Route path='/' element={<UnderMaintenance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App