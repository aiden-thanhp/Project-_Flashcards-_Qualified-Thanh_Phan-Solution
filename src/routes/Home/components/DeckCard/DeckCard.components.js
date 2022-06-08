import React from "react";
import Card from "../../../../components/Card/Card.components";
import CardBody from "../../../../components/Card/CardBody.components";
import DeckCardButtons from "./DeckCardButtons.components";
import DeckCardHeader from "./DeckCardHeader.components";

export default function DeckCard({ deck, handleDelete }) {
    return (
        <Card>
            <CardBody>
                <DeckCardHeader deckName={deck.name} numOfCards={deck.cards.length} />
                <p className="card-text">{deck.description}</p>
                <DeckCardButtons id={deck.id} handleDelete={handleDelete} />
            </CardBody>
        </Card>
    )
}