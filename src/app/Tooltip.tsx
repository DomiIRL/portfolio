import React from 'react';

interface TooltipProps {
    text: string[];
    hovered: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, hovered }) => {
    return (
        <div className="inline-block">
            <div className={`tooltip show-appear ${hovered ? 'show' : ''}`}>
                {text.map((line, index) => (
                    <p key={index} className="inline">{line}</p>
                ))}
            </div>
        </div>
    );
};

export default Tooltip;