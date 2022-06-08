import React from "react";
import CardsCard from "./CardsCard.components";

export default function CardsList({ deckId, cards }) {
    return (
        <>
            <h1 className="mt-3">Cards</h1>
            {cards.map((card) => 
                <CardsCard deckId={deckId} cardId={card.id} front={card.front} back={card.back} />
            )}
        </>
    )
}