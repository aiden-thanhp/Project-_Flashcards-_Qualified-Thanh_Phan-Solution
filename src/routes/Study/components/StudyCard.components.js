import React, { useState } from "react";
import Card from "../../../components/Card/Card.components";
import CardBody from "../../../components/Card/CardBody.components";
import Button from "../../../components/Button/Button.components";
import { useHistory } from "react-router-dom";

export default function StudyCard({ cards }) {
    const history = useHistory();
    const [currentCard, setCurrentCard] = useState({
        index: 0,
        isFlipped: false
    });
    const { front, back } = cards[currentCard.index];

    function handleFlip() {
        setCurrentCard({
            index: currentCard.index,
            isFlipped: !currentCard.isFlipped
        });
    };

    function handleNextCard() {
        if (currentCard.index < cards.length - 1) {
            setCurrentCard({
                index: currentCard.index + 1,
                isFlipped: false
            });
        } else if (window.confirm("Would you like to restart the deck?")) {
            setCurrentCard({
                index: 0,
                isFlipped: false
            })
        } else {
            history.push("/")
        }
    }

    return (
        <Card>
            <CardBody>
                <h4>{`Card ${currentCard.index + 1} of ${cards.length}`}</h4>
                <p>{currentCard.isFlipped ? back : front}</p>
                <Button 
                    children={"Flip"}
                    handleClick={handleFlip} />
                {currentCard.isFlipped && (
                    <Button
                        className={"btn btn-primary"}
                        children={"Next"}
                        handleClick={handleNextCard} />
                )}
            </CardBody>
        </Card>
    )
}