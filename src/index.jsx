import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './Routes/Home.jsx'
import Contact from './Routes/Contact.jsx'
import Detail from './Routes/Detail.jsx'
import Favs from './Routes/Favs.jsx'
import './index.css'
import NotFound from './Routes/NotFound.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/dentist/:id" element={<Detail />} />
                        <Route path="/favs" element={<Favs />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
