import { createRoot } from 'react-dom/client'

import './index.css'
import "./assets/fonts/fonts.css"
import "react-datepicker/dist/react-datepicker.css";

import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/React_TodoList/">
    <App />
  </BrowserRouter>
)
