import './main.css'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <div className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      </>
  )
}

export default App
