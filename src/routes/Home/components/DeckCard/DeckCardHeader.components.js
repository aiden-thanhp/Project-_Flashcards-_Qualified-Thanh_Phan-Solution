import React from "react";

export default function DeckCardHeader({
    deckName,
    numOfCards
}) {
    return (
        <div className="d-flex justify-content-between">
           <h4 className="card-title">{deckName}</h4>
           <p className="card-subtitle text-secondary mt-1">{numOfCards} cards</p>
        </div>
    )
}