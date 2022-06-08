import React from "react";
import Button from "../../../components/Button/Button.components";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import { BiBookBookmark } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../../utils/api";

export default function CardHomeButtons({ deckId }) {
    const history = useHistory();

    function handleEdit() {
        history.push(`/decks/${deckId}/edit`)
    };

    function handleStudy() {
        history.push(`/decks/${deckId}/study`)
    };

    function handleCreateCard() {
        history.push(`/decks/${deckId}/cards/new`)
    };

    function handleDelete(id) {
        if (window.confirm(`Delete this deck?`)) {
            deleteDeck(id);
            history.push("/");
        }
    };

    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start">
                <Button 
                    handleClick={handleEdit}
                    icon={<RiPencilFill />}
                    children={"Edit"} />
                <Button 
                    className={"btn btn-primary"}
                    handleClick={handleStudy}
                    icon={<BiBookBookmark />}
                    children={"Study"} />
                <Button 
                    className={"btn btn-primary"}
                    handleClick={handleCreateCard}
                    icon={<FaPlus />} 
                    children={"Add Cards"} />
            </div>
            <Button 
                className={"btn btn-danger"}
                handleClick={() => handleDelete(deckId)}
                icon={<RiDeleteBin6Fill />}
                children={""}/>
        </div>
    )
}