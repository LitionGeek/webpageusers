import React from 'react'
import {  
    BrowserRouter,
    Routes,
    Route,
} 
    from 'react-router-dom'
import { LandingPage } from '../components/LandingPage'
import { PageLogin } from '../components/PageLogin'

export const ListRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route to="/" index element={<PageLogin/>}/>
                <Route path='home' element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
