import React, { useState } from "react";

function StudyHistoryModel(props) {

	let studyHistory;
	if (localStorage.getItem('studyHistory') !== null) {
		studyHistory = JSON.parse(localStorage.getItem('studyHistory'));
	}

    let displayMode = "session";
    if(props.displayMode !== undefined ){
        displayMode = props.displayMode;
    }

    let newStudyHistory = [];

    if(props.displayMode == "day"){       
        for(let i=0; i < studyHistory.length; i += 0){
            let currentDay = studyHistory[i].dateHistory;
            let totalTime = 0;

            while(i < studyHistory.length && studyHistory[i].dateHistory == currentDay){    
                totalTime += studyHistory[i].timeHistory;
                i++;
            }
            
            let newHistoryItem = {
                dateHistory: currentDay,
                timeHistory: totalTime
            }

            newStudyHistory.push(newHistoryItem);
        }
        studyHistory = newStudyHistory;
    }

	return (
		<ul>
            {studyHistory.map((element, index) => {
                return (
                    <li key={index}>
                        {element.dateHistory}:{" "}
                        {Math.floor(element.timeHistory / 60)}{" min "}{element.timeHistory%60}{" sec"}
                    </li>
                );
            })}
        </ul>
	);
}

export default StudyHistoryModel;