import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Halaman from './Halaman.jsx'
import Button from './Button.jsx'
import Input from './input.jsx'
import NamaLengkap from './NamaLengkap.jsx'
import LoginForm from './Tugas_pertemuan_4/LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Halaman /> */}
    {/* <Button /> */}
    {/* <Input /> */}
    {/* <NamaLengkap /> */}
    <LoginForm />
  </StrictMode>,
)
