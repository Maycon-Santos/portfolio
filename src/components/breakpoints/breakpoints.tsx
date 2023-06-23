'use client'

import React, {
    PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useLayoutEffect,
    useState
} from 'react';

type Breakpoints = {
    min: boolean
    small: boolean
    medium: boolean
    large: boolean

    minDown: boolean
    smallDown: boolean
    mediumDown: boolean
}

const initialBreakPointsContextValue = {
    min: true,
    small: false,
    medium: false,
    large: false,
    minDown: false,
    smallDown: false,
    mediumDown: false
}

const breakpoints = {
    small: 400,
    medium: 720,
    large: 1280
}

const BreakpointsContext = createContext<Breakpoints>(initialBreakPointsContextValue)

export const BreakpointsProvider: React.FC<PropsWithChildren> = props => {
    const { children } = props
    const [breakpoint, setBreakpoint] = useState<Breakpoints>(initialBreakPointsContextValue);

    useLayoutEffect(() => {
        function updateSize() {
            setBreakpoint({
                ...breakpoint,
                small: window.matchMedia(`screen and (min-width: ${breakpoints.small}px)`).matches,
                medium: window.matchMedia(`screen and (min-width: ${breakpoints.medium}px)`).matches,
                large: window.matchMedia(`screen and (min-width: ${breakpoints.large}px)`).matches,
    
                minDown: window.matchMedia(`screen and (max-width: ${breakpoints.small - 1}px)`).matches,
                smallDown: window.matchMedia(`screen and (max-width: ${breakpoints.medium - 1}px)`).matches,
                mediumDown: window.matchMedia(`screen and (max-width: ${breakpoints.large - 1}px)`).matches
            })
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <BreakpointsContext.Provider value={breakpoint}>
            {children}
        </BreakpointsContext.Provider>
    )
}

export const useBreakpoints = () => useContext(BreakpointsContext)

const breakPointOrderToMatches: (keyof Breakpoints)[] = [
    'smallDown',
    'mediumDown',
    'minDown',
    'large',
    'medium',
    'small',
    'min',
]


// TODO: Improve typing to understand the return
export const breakpointMatches = (
    breakpoints: Breakpoints,
    matchesObj: { [k in keyof Partial<Breakpoints>]: any }
) => {
    const matches = breakPointOrderToMatches.find(breakpoint => {
        if (matchesObj[breakpoint] === undefined) {
            return false
        }

        return breakpoints[breakpoint]
    })

    return matches ? matchesObj[matches] : true
}
