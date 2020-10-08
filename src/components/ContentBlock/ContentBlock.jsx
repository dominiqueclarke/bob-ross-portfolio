import React from "react";
import styled from "styled-components";

const StyledContentBlock = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 40px;
`;

export default function ContentBlock({ children, className }) {
    return (
        <StyledContentBlock className={className}>
            {children}
        </StyledContentBlock>
    );
}
