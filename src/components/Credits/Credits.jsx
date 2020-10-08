import React from "react";

import styled from "styled-components";

import BodyCopy from "components/BodyCopy/BodyCopy";
import Button from "components/Button/Button";
import Panel from "components/Panel/Panel";

const StyledCredits = styled.div`
    bottom: 20px;
    position: fixed;
    right: 20px;
    width: 200px;
    z-index: 2;
`;

const StyledBodyCopy = styled(BodyCopy)`
    margin-bottom: 20px;
`;

export default function Credits({
    currentArtistLink,
    currentArtistName,
    onUpdateArt,
}) {
    return (
        <StyledCredits>
            <Panel>
                <StyledBodyCopy element="p">
                    Photo by <a href={currentArtistLink}>{currentArtistName}</a>{" "}
                    on <a href="https://unsplash.com/">Unsplash</a>.
                </StyledBodyCopy>
                <Button onClick={onUpdateArt}>Update Artwork</Button>
            </Panel>
        </StyledCredits>
    );
}
