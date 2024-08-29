import { useRef } from "react";

function HorizontallyScrollable({ children, className = '' }) {
    const scrollRef = useRef();

    const handleMouseDown = (evt) => {
        const oldX = evt.pageX;
        const scrollLeft = scrollRef.current.scrollLeft;

        const handleMouseMove = (evt) => {
            const newX = evt.pageX;
            const offSet = newX - oldX;

            scrollRef.current.scrollLeft = scrollLeft - offSet;
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (evt) => {
        const oldX = evt.touches[0].pageX;
        const scrollLeft = scrollRef.current.scrollLeft;

        const handleTouchMove = (evt) => {
            const newX = evt.touches[0].pageX;
            const offSet = newX - oldX;

            scrollRef.current.scrollLeft = scrollLeft - offSet;
        };

        const handleTouchEnd = () => {
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };

        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <div
            className={className}
            ref={scrollRef}
            onMouseDown={(evt) => handleMouseDown(evt)}
            onTouchStart={(evt) => handleTouchStart(evt)}
        >
            {children}
        </div>
    );
}

export default HorizontallyScrollable;