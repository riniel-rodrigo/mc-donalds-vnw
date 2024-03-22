import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'

import * as S from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <S.GlobalStyle/>
    <Home />
  </React.StrictMode>,
)
