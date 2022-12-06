import {Route ,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Dashboard />} />
    </Routes>
  )
}

export default App