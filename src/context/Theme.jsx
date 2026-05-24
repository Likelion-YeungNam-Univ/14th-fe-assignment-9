import { createContext, useState, useEffect } from 'react'

const Theme = createContext(null);

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    return (
        <Theme.Provider value={{ isDark, setIsDark }}>
            {children}
        </Theme.Provider>
    )
}

export default Theme