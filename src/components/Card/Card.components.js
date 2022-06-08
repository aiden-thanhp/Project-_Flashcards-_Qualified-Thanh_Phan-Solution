import React from "react";

export default function Card({ children }) {
    return (
        <div className="card mt-3">
            {children}
        </div>
    )
}