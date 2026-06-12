import { createRoot } from 'react-dom/client'
import './index.css'
import "./assets/fonts/fonts.css"
import "react-datepicker/dist/react-datepicker.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <App />
)
