import React from "react";

function Betyg() {

    let betyg = "C"

    const letterStyle = {
        fontSize: "6rem"
    }

	return (
		<p style = {letterStyle}>{betyg}</p>
	);
}

export default Betyg;