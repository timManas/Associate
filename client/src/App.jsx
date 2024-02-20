import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import HeaderCustom from './components/HeaderCustom.jsx'

function App() {
  return (
    <>
      <HeaderCustom />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
