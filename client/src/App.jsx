import {Routes, Route} from 'react-router-dom'
import { Admin, Create, Invoice } from './components'
const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Invoice />}/>
        <Route path='/useradmin' element={<Admin />} />
        <Route path='/useradmin/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
