import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbare  from './Components/Navbare/Navbare.jsx'
function AppLayout() {
    return (
        <>
        <Navbare/>
        <Outlet/>
        </>
    )
}

export default AppLayout
