import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button.components";
import { FaPlus } from "react-icons/fa";
import DeckList from "./components/DeckList/DeckList.components";

export default function Home() {
    const history = useHistory();

    function handleCreateDeck() {
        history.push("/decks/new");
    }
    return (
        <div>
            <Button 
                handleClick={handleCreateDeck}
                icon={<FaPlus />} 
                children={"Create Deck"} />
            <DeckList />
        </div>
    )
}