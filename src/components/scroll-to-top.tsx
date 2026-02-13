import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const timeout = setTimeout(() => window.scrollTo(0, 0), 250);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
