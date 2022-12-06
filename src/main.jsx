import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'

// CSS
import './assets/css/styles.css'

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Custom JS
import './assets/js/scripts.js'
// import './assets/assets/demo/chart-area-demo'
// import './assets/assets/demo/chart-bar-demo'
// import './assets/js/datatables-simple-demo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
