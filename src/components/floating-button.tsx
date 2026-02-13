import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const FloatingButton: React.FC = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('next-section');
        if (nextSection) {
            window.scrollTo({
                top: nextSection.offsetTop - 100,
                behavior: 'smooth',
            });
        }
    };

    const [isClicked] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <Button
                onClick={scrollToNextSection}
                className={`
          rounded-full bg-koguma-text hover:bg-koguma-text-hover text-koguma-text-light
          animate-bounce-gentle
          ${isClicked ? 'animate-pulse' : ''}
        `}
                style={{ animation: 'floatEmphasis 3s ease-in-out infinite' }}
                size="icon"
            >
                <ArrowDown />
            </Button>

            <style>
                {`
        @keyframes floatEmphasis {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes glow {
          from {
            transform: scale(0.9);
            opacity: 0.3;
          }
          to {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        .animate-bounce-gentle {
          animation: floatEmphasis 3s ease-in-out infinite;
        }
        `}
            </style>
        </div>
    );
};

export default FloatingButton;
