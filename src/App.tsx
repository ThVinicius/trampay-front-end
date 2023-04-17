import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import GlobalCSS from './assets/css/Global'
import ResetCSS from './assets/css/Reset'
import { RecoverPassword } from './pages/recoverPassword/Index'
import { SetPassword } from './pages/setPassword/Index'
import { SignIn } from './pages/sign-in/Index'
import { SignUp } from './pages/sign-up/Index'

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/password-recovery" element={<RecoverPassword />} />
        <Route path="/auth/set-password" element={<SetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
