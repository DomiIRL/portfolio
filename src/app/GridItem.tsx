import {useEffect, useState} from "react";

interface GridItemProps {
    title: string[];
    subtitle?: string[];
    buttons: { text: string; href: string }[];
    additionalContent?: (hovered: boolean) => React.ReactNode;
    position: 'left' | 'right';
}

export default function GridItem({ title, subtitle = [], buttons, additionalContent = () => <div />, position }: GridItemProps) {
    const [hovered, setHovered] = useState<boolean>(false);
    const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1000);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    const handleFocus = () => setHovered(true);
    const handleBlur = () => setHovered(false);

    const createVerticalLine = () => {
        return (
            <div className="border-l-2 border-gray-200 mx-4 border-line self-stretch"></div>
        )
    }

    const createTitle = () => {
        return title.map((text, idx) => (
            <h2 key={idx}
                className={'text-title'}
                style={{
                    marginRight: position === 'left' ? `${(title.length - idx - 1) * 0.5}em` : '0',
                    marginLeft: position === 'right' ? `${idx * 0.5}em` : '0',
                }}
            >
                {text}
            </h2>
        ))
    }

    const createSubtitle = () => {
        return subtitle.map((text, idx) => (
            <p key={idx} className="text-subtitle mt-2 text-center">{text}</p>
        ))
    }

    const createButtons = () => {
        return buttons.map((button, idx) => (
            <div key={idx}>
                <a href={button.href} className="btn underline-hover">{button.text}</a>
            </div>
        ))
    }

    return (
        <>
            {isWideScreen && position === 'right' && additionalContent(hovered)}
            <div
                className={`transform flex items-center ${hovered ? 'show' : ''}`}
                style={{
                    justifyContent : position === 'left' ? 'flex-end' : 'flex-start',
                    paddingLeft: !isWideScreen && position === 'right' ? '10em' : '0',
                    paddingRight: !isWideScreen && position === 'left' ? '10em' : '0',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={0}
            >
                {position === 'left' && (
                    <>
                        <div className="text-right">
                            {createTitle()}
                            {createSubtitle()}
                        </div>
                        {createVerticalLine()}
                    </>
                )}
                <div className="flex flex-col gap-2 btn-container">
                    {createButtons()}
                </div>
                {position === 'right' && (
                    <>
                        {createVerticalLine()}
                        <div>
                            {createTitle()}
                            {createSubtitle()}
                        </div>
                    </>
                )}
            </div>
            {isWideScreen && position === 'left' && additionalContent(hovered)}
        </>
    );
}