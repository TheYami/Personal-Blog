import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage'
import ViewPostPage from './components/ViewPostPage'
import NotFoundPage from './components/NotFoundPage'
import SignUp from './components/SignUp'
import Login from './components/Login'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/post/:id' element={<ViewPostPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
