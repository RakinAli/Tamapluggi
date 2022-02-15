import React,{useState} from "react";

function FlashcardEdit(props) {
   
    function questionCreate(e){
        props.testArray
    }
	return <div>
           <label>***TEST*** create flashcard brah (question)</label>
           <input onChange = {(e)=>questionCreate(e.target.value)}></input>

         </div>;
}

export default FlashcardEdit;
