import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import GlobalCSS from './assets/css/Global'
import ResetCSS from './assets/css/Reset'
import { SignIn } from './pages/sign-in/Index'

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
