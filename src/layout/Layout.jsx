import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {
    const navigate = useNavigate()
    useEffect(() => {
        let auth = localStorage.getItem('auth')
        if (!auth) {
            navigate("/login")
        }
    }, [])
    return (
        <div className='layout'>
            {/* <Loader /> */}
            <Outlet />
        </div>
    )
}
