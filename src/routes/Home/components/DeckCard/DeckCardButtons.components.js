import React from "react";
import Button from "../../../../components/Button/Button.components";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
import { useHistory } from "react-router-dom";

export default function DeckCardButtons({ id, handleDelete }) {
    const history = useHistory();

    function handleView() {
        history.push(`/decks/${id}`)
    }

    function handleStudy() {
        history.push(`/decks/${id}/study`)
    }
    
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start">
                <Button 
                    handleClick={handleView}
                    icon={<FaRegEye />}
                    children={"View"} />
                <Button 
                    className={"btn btn-primary"}
                    handleClick={handleStudy}
                    icon={<BiBookBookmark />}
                    children={"Study"} />
            </div>
            <Button 
                className={"btn btn-danger"}
                handleClick={handleDelete}
                icon={<RiDeleteBin6Fill />}
                children={""}
                id={id} />
        </div>
    )
}