import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.components";
import StudyCard from "./components/StudyCard.components";
import NoCard from "./components/NoCard.components";

export default function Study() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readDeck(deckId, signal).then((deck) => setDeck(deck));
    }, [deckId])

    if (deck) {
        const linkList = [
        { linkUrl: `/decks/${deck.id}`, name: `${deck.name}`, key: 1}
        ];

        return (
            <>
                <Breadcrumb 
                    pageName={"Study"}
                    linkList={linkList}
                    />
                <h1>Study: {deck.name}</h1>
                {deck.cards.length < 3 
                    ? <NoCard numOfCards={deck.cards.length} deckId={deckId} />
                    : <StudyCard cards={deck.cards} />
                }
            </>
        )
    } else return "Loading deck..."
}