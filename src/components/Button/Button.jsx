import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("${(props) => props.theme.currentArt}");
    border: none;
    color: white;
    font-family: "Permanent Marker";
    font-weight: 600;
    letter-spacing: 5px;
    padding: 20px;
`;

export default function Button({ children, onClick }) {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
