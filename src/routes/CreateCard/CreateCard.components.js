import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.components";
import { createCard, readDeck } from "../../utils/api";
import Form from "../../components/Form/Form.components";

export default function CreateCard () {
    const { deckId } = useParams();
    const [deck, setDeck] = useState();
    const history = useHistory();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readDeck(deckId, signal).then((deck) => setDeck(deck));
    }, [deckId])

    if (deck) {
        function handleCancel() {
            history.push(`/decks/${deckId}`);
        };

        function handleSubmit(event, card) {
            event.preventDefault();
            createCard(deckId, { front: card.front, back: card.back }).then(
                history.push(`/decks/${deckId}`)
            )
        };

        const formInputs = [
            { 
                label: "Front", 
                name: "front", 
                type: "textarea", 
                id: "front",
                defaultValue: "Front side of card"
            },
            {
                label: "Back",
                name: "back",
                type: "textarea",
                id: "back",
                defaultValue: "Back side of Card"
            }
        ];

        const linkList = [
            { linkUrl: `/decks/${deckId}`, name: `${deck.name}`, key: 1}
        ];

        return (
            <>
                <Breadcrumb linkList={linkList} pageName={"Add Card"} />
                <h2>{deck.name}: Add Card</h2>
                <Form onSubmit={handleSubmit} onCancel={handleCancel} formInputs={formInputs} previousData={deck} />
            </> )
    } else return "Loading deck here..."
}