import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App