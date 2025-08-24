import './Button.css'
import React from 'react';

interface Props {
    children: React.ReactNode
}

interface eventsProps extends Props {
    onClick: () => void
}


export function BasicButton({onClick, children}: eventsProps) {
    return (
        <button onClick={onClick} className="bg-black text-white px-4 py-2 rounded text-sm cursor-pointer">
            {children}
        </button>
    );
}

export function SubmitButton({children}: Props) {
    return (
        <button type="submit" className="bg-black text-white px-4 py-2 rounded text-sm cursor-pointer">
            {children}
        </button>
    );
}