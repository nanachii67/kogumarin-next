import { useLocation } from 'react-router-dom';

const usePageStroke = () => {
    const location = useLocation();

    const strokeColors = {
        '/': 'stroke-koguma-text',
        '/about/': 'stroke-koguma-background',
    } as const;

    return (
        strokeColors[location.pathname as keyof typeof strokeColors] ||
        'stroke-gray-500'
    );
};

// Usage in component
const IconHeroTile: React.FC = () => {
    const strokeColor = usePageStroke();

    return (
        <svg
            className={`w-40 aspect-square ${strokeColor} bg-repeat`}
            fill="none"
            viewBox="0 0 500 500"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M236,181.5s-26.8-86.8-31.7-92.6"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M171.1,167s17,13.7,27.7,24.1c7.6,7.4,17.1,17.1,17.1,17.1"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M168.2,176.9s43,31.1,47.3,34.5,9.5,7.7,9.5,7.7"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M231.6,269.5s-3.1,1.8-1.5,4.5"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M281.7,275.8s22.6,24.1,39.7,51.6"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M333.4,327.4s-31.9-37-41.6-43.5"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M314.1,265.4c3.6-1.8,86.8,22.3,88.6,27.1"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M114.3,215.5s1,37.8,24.5,56.7c24.8,20,44.1,21.8,67.1,24.4,0,0-6.2,40.5,25.6,66.4,31.9,25.9,61,21.3,68.5,21.6"
            />
        </svg>
    );
};

export default IconHeroTile;
