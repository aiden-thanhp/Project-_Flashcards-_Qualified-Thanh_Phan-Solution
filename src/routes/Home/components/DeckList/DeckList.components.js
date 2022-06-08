import React, { useEffect, useState } from "react";
import DeckCard from "../DeckCard/DeckCard.components";
import { deleteDeck, listDecks } from "../../../../utils/api";

export default function DeckList() {
    const [deckList, setDeckList] = useState();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        listDecks(signal).then((decks) => setDeckList(decks));
        return () => controller.abort();
    }, []);

    function handleDelete(id) {
        if (window.confirm(`Delete this deck?`)) {
            deleteDeck(id);
            window.location.reload();
        }
    }

    if (deckList) {
        return (
            <>
                {deckList.map((deck) => (
                    <DeckCard
                        key={deck.id}
                        handleDelete={() => handleDelete(deck.id)} 
                        deck={deck} />
                ))}
            </>
        )
    } else return "Loading deck here..."
}