import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import 'flowbite'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800, // Animation duration in milliseconds
  easing: 'ease-in-out', // Animation easing
  once: true, // Whether animation should happen only once - while scrolling down
});
// Initialize theme before React mounts
const storedTheme = localStorage.getItem('theme');
if (
  storedTheme === 'dark' ||
  (!storedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)