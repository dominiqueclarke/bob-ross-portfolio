import React from "react";
import styled from "styled-components";

import headshot from "assets/headshot.jpg";

import Panel from "components/Panel/Panel";

const StyledHeaderContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 550px;
`;

const StyledProfile = styled.div`
    flex: 1 2 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 20px;
        font-family: "Montserrat";
        text-align: center;
    }

    img {
        border-radius: 50%;
        margin-bottom: 20px;
        width: 200px;
    }
`;

const StyledTagline = styled.div`
    flex: 2 0 0;
    z-index: 1;
    font-size: 68px;
    text-align: right;
    font-family: "Permanent Marker";
    padding: 10px;
`;

const StyledWord = styled.span`
    position: relative;
    padding: 10px;
    ::before {
        position: absolute;
        display: block;
        bottom: -5px;
        right: 0;
        content: "";
        width: 100%;
        height: 100%;
        background-image: url(${require("assets/brush-stroke.svg")});
        background-size: 100%;
        z-index: -1;
    }
`;

export default function Header() {
    return (
        <header>
            <Panel>
                <StyledHeaderContent class="header-content">
                    <StyledProfile class="header-item">
                        <img alt="headshot" src={headshot} />
                        <h1>Dominique Clarke: Front End Engineer</h1>
                    </StyledProfile>
                    <StyledTagline class="tagline header-item">
                        <div>I make</div>
                        <div>
                            <StyledWord>happy</StyledWord>
                        </div>
                        <div>web apps</div>
                    </StyledTagline>
                </StyledHeaderContent>
            </Panel>
        </header>
    );
}
