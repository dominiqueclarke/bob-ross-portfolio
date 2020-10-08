import React from "react";
import styled from "styled-components";

import Panel from "components/Panel/Panel";
import BodyCopy from "components/BodyCopy/BodyCopy";

const StyledP = styled.p`
    margin-bottom: 10px;
`;

export default function Intro() {
    return (
        <Panel heading="Delight Driven Development">
            <BodyCopy element="span" size="xl">
                <StyledP>
                    I practice delight-driven development. As a front end
                    developer with over 4 years of enterprise and startup
                    experience, it's my joy to delight users, business partners,
                    and development peers. Few things make me happier than
                    clean, beautiful code that translates into clean, beautiful
                    user experiences.
                </StyledP>
                <StyledP>
                    In the pursuit of building functional and beautiful software
                    that users love, I am continuously expanding my knowledge of
                    development, design, and product management, and team
                    leadership.
                </StyledP>
                <StyledP>
                    I am most proficient with JavaScript, React, Redux, Jest,
                    HTML and SCSS, which I've used to build scalable,
                    performant, accessible, and beautiful user interfaces for
                    enterprise web applications. I've also contributed back end
                    .NET code.
                </StyledP>

                <StyledP>
                    While I enjoy learning new technologies, I also enjoy
                    teaching technologies I'm familiar with. In my current role
                    as a Software Developer for Think Company, I mentor junior
                    devs and give talks on the latest front end technologies at
                    our UI Guild. As a technical instructor for Zip Code
                    Wilmington, I helped students from non-technical backgrounds
                    achieve their dreams of becoming professional software
                    developers by developing and delivering curriculum focused
                    on Java, Spring, Angular 2+, test-driven development, design
                    patterns, cloud applications and best practices for writing
                    clean code. In the past as a co-organizer and teacher for
                    Girl Develop It, I helped equip adult women with new tech
                    skills and introduce them to careers they'll love. I still
                    enjoy delivering talks to the greater tech community, and
                    recently gave a talk on Breaking Into Tech for Women Who
                    Code Dallas.
                </StyledP>

                <StyledP>
                    As a member of a development team, I hope to learn and to
                    teach, to mentor and be mentored, working collaboratively to
                    build useful, elegant and visually stunning web applications
                    that people enjoy using day after day.
                </StyledP>
            </BodyCopy>
        </Panel>
    );
}
