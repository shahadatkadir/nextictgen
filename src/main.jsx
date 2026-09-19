import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div class="min-h-screen bg-[#020617] bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] bg-fixed">
    <App/>
</div>
   
  </StrictMode>,
)
