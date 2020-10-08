import React, { useEffect } from "react";
import "typeface-permanent-marker";
import "typeface-montserrat";

import styled from "styled-components";

import startScratch from "clipPath";

const StyledCanvas = styled.canvas`
    background: url(${(props) => props.theme.currentArt}) no-repeat center
        center/cover;
    display: block;
    position: fixed;
    top: 0;
    z-index: -1;
    ::after {
        content: url(${(props) => props.theme.nextArt});
    }
`;

function ArtCanvas() {
    useEffect(() => {
        startScratch();
    }, []);

    return <StyledCanvas id="art"></StyledCanvas>;
}

export default ArtCanvas;
