import React from "react";
import Button from "../../../../components/Button/Button.components";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../../../utils/api";
import { RiPencilFill, RiDeleteBin6Fill } from "react-icons/ri";

export default function CardsCardButtons({ deckId, cardId }) {
    const history = useHistory();

    function handleEdit() {
        history.push(`/decks/${deckId}/cards/${cardId}/edit`)
    }

    function handleDelete(id) {
        if (window.confirm(`Delete this card?`)) {
            deleteCard(id);
            window.location.reload();
        }
    }

    return (
        <>
            <Button 
                handleClick={handleEdit}
                icon={<RiPencilFill />}
                children={"Edit"} />
            <Button 
                className={"btn btn-danger"}
                handleClick={() => handleDelete(cardId)}
                icon={<RiDeleteBin6Fill />}
                children={""}/>
        </>
    )
}