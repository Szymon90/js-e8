/*
    Komponet ma miec tekst
    ten tekst obcienty do okreslonej ilosci znakow
    jezeli tekst jest dluzszy niz ta okreslona liczba znakow ma sie pojawic przycisk Rozwin
    po kliknieciu rozwin ma sie pojawic caly tekst
    i przycisk zwin
*/

import React, { useState } from 'react';

const LIMIT = 150;

// const shouldShowButton = text.length > LIMIT;

// function Text() {
const Text = ({ children }) => {
    console.log('useState()', useState(false));
    const [expanded, setExpanded] = useState(false);

    const shouldShowButton = children.length > LIMIT;

    // function onClick() {}
    // const onClickChangeExpanded = () => setExpanded(!expanded);

    return (
        <div>
            {expanded ? children : children.substring(0, LIMIT)}
            {/* shouldShowButton ? (<button>Rozwin</button>) : null*/}
            {shouldShowButton && (
                <button onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'Zwiń' : 'Rozwiń'}
                </button>
            )}
        </div>
    );
}

export default Text;
