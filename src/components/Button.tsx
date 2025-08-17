import './Button.css'
import React from 'react';


function Button({children}:{children: React.ReactNode}) {
    return (
        <button className="bg-black text-white px-4 py-2 rounded text-sm">
            {children}
        </button>
    );
}

export default Button;