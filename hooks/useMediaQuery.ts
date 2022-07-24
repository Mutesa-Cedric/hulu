import { useEffect, useState } from "react";

const useMediaQuery = (minWidth: number) => {
    const [state, setState] = useState({
        windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1200,
        isDesiredWidth: false
    });
    useEffect(() => {
        setState(prevState => ({ ...prevState, windowWidth: window.innerWidth }))
        const resizeHandler = () => {
            const windowWidth: number = window.innerWidth;
            const isDesiredWidth: boolean = windowWidth < minWidth;
            setState({ windowWidth: windowWidth, isDesiredWidth: isDesiredWidth });
        }
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [state.windowWidth])
    return state.isDesiredWidth;
}

export default useMediaQuery;