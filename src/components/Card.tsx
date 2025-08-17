import React from "react";

function Card({children}: { children: React.ReactNode }) {
    return (
        <div className="p-6 border-1 rounded-2xl border-gray-400">
            {children}
        </div>
    );
}

export default Card;