import React, { useState } from "react";
import { Link } from "react-router-dom";

function FlashcardEdit(props) {
     let cards = []
    if (localStorage.getItem('flashcardList') !== null) {
        cards = JSON.parse(localStorage.getItem('flashcardList'));
    }

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState("");
    const [flashcardList, setFlashcardList] = useState(cards);

    const flexStyle = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column"
    }

    function handleAdd() {
        let newFlashcard = {
            question: question,
            answer: answer,
            options: options
        };
        let newList = [...flashcardList, newFlashcard];
        setFlashcardList(newList);
        localStorage.setItem('flashcardList', JSON.stringify(newList));
        setQuestion("");
        setAnswer("");
        setOptions([])
    }

    function handleOptionAdd() {
        if (newOption === "") {
            return;
        }
        else {
            let newOptionList = [...options, newOption];
            setOptions(newOptionList);
            setNewOption("");
        }
    }

    function handleOptionDelete(index) {
        let arrCopy = [...options];
        arrCopy.splice(index, 1);
        setOptions(arrCopy);
    }

    return (
        <main>
            <h2>Add flashcards:</h2>
            <div style={flexStyle}>
                <label>Question:</label>
                <input
                    placeholder="Enter a question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <label>Answer:</label>
                <input
                    placeholder="Enter the answer..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <label>Options:</label>
                {options.map((item, index) => {
                    return (
                        <li style={{ padding: "0rem 0rem" }} key={index}>
                            <div className="nextTo">
                                <p>{item}</p>
                                <button onClick={() => handleOptionDelete(index)} className="smallButton">-</button>
                            </div>
                        </li>
                    );
                })}
                <div className="nextTo">
                    <input
                        placeholder="Enter option..."
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                    />
                    <button onClick={handleOptionAdd} className="smallButton">+</button>
                </div>
                <div className="centerContent">
                    <button onClick={handleAdd} className="largeButton">Save flaschard</button>
                    <Link to="../FlashcardSelect"><button className="largeButton">Back to menu</button></Link>
                </div>
            </div>
        </main>
    );
}

export default FlashcardEdit;
