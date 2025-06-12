import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import Router from './provider/router/router'
import { Provider } from 'react-redux'
import { store } from './store/store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />

    </Provider>
  </StrictMode>,
)
