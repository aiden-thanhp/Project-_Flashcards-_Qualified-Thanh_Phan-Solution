import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.components";
import { readDeck } from "../../utils/api";
import CardHomeButtons from "./components/CardHomeButtons.components";
import CardsList from "./components/CardsList/CardsList.components";

export default function Deck() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readDeck(deckId, signal).then((deck) => setDeck(deck));
    }, [deckId])

    console.log(deckId)

    if (deck) {
        return (
            <>
                <Breadcrumb pageName={deck.name} />
                <h2>{deck.name}</h2>
                <p>{deck.description}</p>
                <CardHomeButtons deckId={deckId} />
                <CardsList deckId={deckId} cards={deck.cards} />
            </> )
    } else return "Loading deck here..."
}