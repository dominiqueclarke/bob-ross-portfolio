import React from "react";
import styled from "styled-components";

import Heading from "components/Heading/Heading";

const StyledPanel = styled.div`
    background-color: white;
    border: 2px solid;
    border-image: url(${(props) => props.theme.currentArt}) 1 1 1 1 repeat;
    cursor: auto;
    padding: 30px;
`;

export default function Panel({ className, children, heading }) {
    return (
        <StyledPanel className={`${className}`}>
            {heading ? (
                <Heading element="h2" size="l">
                    {heading}
                </Heading>
            ) : null}
            {children}
        </StyledPanel>
    );
}
