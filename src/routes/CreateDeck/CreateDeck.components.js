import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.components";
import { createDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";
import Form from "../../components/Form/Form.components";

export default function CreateDeck() {
    const history = useHistory();
    
    function handleCancel() {
        history.push("/");
    };

    function handleSubmit(event, deck) {
        event.preventDefault();

        const controller = new AbortController();
        const signal = controller.signal;
        createDeck({...deck}, signal).then(() => history.push("/"))
    }

    const formInputs = [
        { 
            label: "Name", 
            name: "name", 
            type: "text", 
            id: "deckName",
            defaultValue: "Deck Name"
        },
        {
            label: "Description",
            name: "description",
            type: "textarea",
            id: "deckDescription",
            defaultValue: "Brief description of the deck"
        }
    ]
    
    return (
        <>
            <Breadcrumb pageName={"Create Deck"} />
            <h1>Create Deck</h1>
            <Form onSubmit={handleSubmit} onCancel={handleCancel} formInputs={formInputs} />
        </>
    )
}