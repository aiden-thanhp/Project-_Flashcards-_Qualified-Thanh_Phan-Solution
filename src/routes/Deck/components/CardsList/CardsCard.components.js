import React from "react";
import CardsCardButtons from "./CardsCardButtons.components"
import Card from "../../../../components/Card/Card.components";
import CardBody from "../../../../components/Card/CardBody.components";
import "./CardsCard.css";

export default function CardsCard({ deckId, cardId, front, back }) {
    return (
        <Card>
            <CardBody>
                <div className="d-flex flex-row">
                    <p className="flex-even mr-4">{front}</p>
                    <div className="d-flex flex-column flex-even">
                        <p>{back}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <CardsCardButtons deckId={deckId} cardId={cardId} />
                </div>
            </CardBody>
        </Card>
    )
}