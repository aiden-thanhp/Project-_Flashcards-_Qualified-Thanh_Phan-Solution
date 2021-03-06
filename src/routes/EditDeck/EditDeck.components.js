import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.components";
import Form from "../../components/Form/Form.components";

export default function EditDeck() {
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

        async function handleSubmit(event, deck) {
            event.preventDefault();

            const controller = new AbortController();
            const signal = controller.signal;
            updateDeck({ ...deck }, signal).then(() => history.push(`/decks/${deckId}`));
        };

        const formInputs = [
            { 
                label: "Name", 
                name: "name", 
                type: "text", 
                id: "deckName",
                placeholder: `${deck.name}`
            },
            {
                label: "Description",
                name: "description",
                type: "textarea",
                id: "deckDescription",
                placeholder: `${deck.description}`
            }
        ];

        const linkList = [
            { linkUrl: `/decks/${deckId}`, name: `${deck.name}`}
        ];

        return (
            <>
                <Breadcrumb linkList={linkList} pageName={"Edit Deck"} />
                <h1>Edit Deck</h1>
                <Form onSubmit={handleSubmit} onCancel={handleCancel} formInputs={formInputs} previousData={deck} />
            </> )
    } else return "Loading deck here..."
}