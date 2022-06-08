import React from "react";
import Button from "../../../components/Button/Button.components";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function NoCard({ deckId, numOfCards }) {
    const history = useHistory();
    
    function handleAddCards() {
        history.push(`/decks/${deckId}/cards/new`)
    }
    
    return (
        <>
            <h3>Not enough cards</h3>
            <p>You need at least 3 cards to study. There are {numOfCards} in this deck.</p>
            <Button 
                className="btn btn-primary"
                icon={<FaPlus />}
                children={"Add Cards"}
                handleClick={handleAddCards} />
        </>
    )
}