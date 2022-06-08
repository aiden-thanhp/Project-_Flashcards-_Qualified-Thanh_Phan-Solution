import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.components";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../components/Form/Form.components";
import { readDeck, updateCard, readCard } from "../../utils/api";

export default function EditCard() {
    const { deckId, cardId } = useParams();
    const [deck, setDeck] = useState();
    const [card, setCard] = useState();
    const history = useHistory();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readDeck(deckId, signal).then((deck) => setDeck(deck));
    }, [deckId, cardId])

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readCard(cardId, signal).then((card) => setCard(card));
    }, [cardId])

    if (card) {
        function handleCancel() {
            history.push(`/decks/${deckId}`);
        };

        function handleSubmit(event, card) {
            event.preventDefault();
            const controller = new AbortController();
            const signal = controller.signal;
            updateCard({ ...card }, signal).then(() =>
                history.push(`/decks/${deckId}`)
            )
        };

        const formInputs = [
            { 
                label: "Front", 
                name: "front", 
                type: "textarea", 
                id: "front",
                defaultValue: `${card.front}`
            },
            {
                label: "Back",
                name: "back",
                type: "textarea",
                id: "back",
                defaultValue: `${card.back}`
            }
        ];

        const linkList = [
            { linkUrl: `/decks/${deckId}`, name: `${deck.name}`}
        ];

        return (
            <>
                <Breadcrumb linkList={linkList} pageName={`Edit Card ${cardId}`} />
                <h2>Edit Card</h2>
                <Form onSubmit={handleSubmit} onCancel={handleCancel} formInputs={formInputs} previousData={card} />
            </> )
    } else return "Loading card here..."
}