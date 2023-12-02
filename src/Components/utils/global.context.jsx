import { createContext, useEffect, useReducer, useMemo } from 'react'
import axios from 'axios'

export const initialState = { theme: 'light', data: [], dentist: [] }

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DENTIST_LIST':
            return { ...state, dentist: action.payload }
        case 'SWITCH_THEME':
            return { ...state, theme: !state.theme }
        default:
            return state
    }
}

export const ContextGlobal = createContext(undefined)

export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            dispatch({ type: 'SWITCH_THEME', payload: storedTheme })
        }

        axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
            dispatch({ type: 'UPDATE_DENTIST_LIST', payload: result.data })
        })
    }, [])

    const toggleDarkMode = () => {
        dispatch({ type: 'SWITCH_THEME' })
        localStorage.setItem('theme', state.theme ? 'dark' : 'light')
    }
    const activeTheme = state.theme ? 'light' : 'dark'

    const contextValue = useMemo(
        () => ({
            dentist: state.dentist,
            theme: state.theme,
            toggleDarkMode,
            activeTheme
        }),
        [state.dentist, state.theme]
    )

    return (
        <ContextGlobal.Provider value={contextValue}>
            {children}
        </ContextGlobal.Provider>
    )
}
