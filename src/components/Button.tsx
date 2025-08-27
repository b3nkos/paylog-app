import './Button.css'
import React from 'react';

interface Props {
    type: "button" | "submit",
    onClick: () => void,
    children: React.ReactNode
    level?: "primary" | "secondary"
}


export function Button({type, onClick, children, level = "primary"}: Props) {

    if (level === "primary") {
        return (
            <button type={type} onClick={onClick}
                    className="bg-black text-white px-4 py-2 rounded text-sm cursor-pointer">
                {children}
            </button>
        );
    }

    return (<button
            type={type}
            onClick={onClick}
            className="px-4 py-2 rounded border border-gray-300 text-sm hover:bg-gray-50">
            Cancel
        </button>
    );
}