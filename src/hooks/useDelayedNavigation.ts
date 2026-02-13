import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useDelayedNavigation = (delayMs: number = 300) => {
    const navigate = useNavigate();

    const delayedNavigate = useCallback(
        (
            to: string | number,
            options?: { replace?: boolean; state?: any; refresh?: boolean },
        ) => {
            setTimeout(() => {
                if (typeof to === 'number') {
                    navigate(to);
                } else {
                    // Force refresh by adding timestamp to state
                    const navigationOptions = options?.refresh
                        ? {
                              ...options,
                              state: {
                                  ...options?.state,
                                  _refresh: Date.now(),
                              },
                          }
                        : options;

                    navigate(to, navigationOptions);
                }
            }, delayMs);
        },
        [navigate, delayMs],
    );

    return delayedNavigate;
};
