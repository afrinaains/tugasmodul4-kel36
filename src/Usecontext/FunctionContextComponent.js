import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    } 
    return (
        <>
                <div className="btn">
                    <button onClick={toggleTheme}>
                        <div className="btntext">
                    Toggle Theme
                        </div>
                    </button>
                </div> 
            <div style={themeStyles}>Ganti Tema Dongg</div>
        </>
    )
}