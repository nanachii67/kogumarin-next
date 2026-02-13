import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseDelayedNavigationReturn {
    delayedNavigate: (path: string) => void;
    isNavigating: boolean;
}

function useDelayedNavigation(
    delay: number = 1000,
): UseDelayedNavigationReturn {
    const [isNavigating, setIsNavigating] = useState<boolean>(false);
    const navigate = useNavigate();

    const delayedNavigate = useCallback(
        (path: string) => {
            setIsNavigating(true);
            setTimeout(() => {
                navigate(path);
                setIsNavigating(false);
            }, delay);
        },
        [navigate, delay],
    );

    return { delayedNavigate, isNavigating };
}

export default useDelayedNavigation;
