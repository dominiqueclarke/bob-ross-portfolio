import React, { useState } from "react";
import "typeface-permanent-marker";
import "typeface-montserrat";

import { ThemeProvider } from "styled-components";

import "./App.css";

import ArtCanvas from "components/ArtCanvas/ArtCanvas";
import ContentBlock from "components/ContentBlock/ContentBlock";
import Credits from "components/Credits/Credits";
import Header from "components/Header/Header";
import Intro from "components/Intro/Intro";

/* For some reason, the production build is not recognizing this constant
 * when pulled from a data file. Adding it to App.js temporarily */
export const ART = [
    {
        asset: "background2.jpg",
        artistName: "Steve Johnson",
        artistLink: "https://unsplash.com/@steve_j",
    },
    {
        asset: "background1.jpg",
        artistName: "Europeana",
        artistLink: "https://unsplash.com/@europeana",
    },
    {
        asset: "background3.jpg",
        artistName: "Daniel Olah",
        artistLink: "https://unsplash.com/@danesduet",
    },
    {
        asset: "background4.jpg",
        artistName: "Orlova Maria",
        artistLink: "https://unsplash.com/@orlovamaria",
    },
    {
        asset: "background5.jpg",
        artistName: "Geordanna Cordero",
        artistLink: "https://unsplash.com/@geordannatheartist",
    },
    {
        asset: "background6.jpg",
        artistName: "Europeana",
        artistLink: "https://unsplash.com/@europeana",
    },
    {
        asset: "background7.jpg",
        artistName: "Europeana",
        artistLink: "https://unsplash.com/@europeana",
    },
    {
        asset: "background8.jpg",
        artistName: "Geordanna Cordero",
        artistLink: "https://unsplash.com/@geordannatheartist",
    },
];

function App() {
    const [art, setArt] = useState({
        index: 0,
        next: require(`assets/${ART[1].asset}`),
        current: require(`assets/${ART[0].asset}`),
        currentArtistName: ART[0].artistName,
        currentArtistLink: ART[0].artistLink,
        accentColors: ART[0].accentColors,
    });

    const { accentColors, current: currentArt, next: nextArt } = art;

    const handleSetArtNumber = () => {
        setArt(({ index }) => {
            const updatedIndex = index === ART.length - 1 ? 0 : index + 1;
            const updatedArt = ART[updatedIndex];
            const updatedImage = art.next;
            const updatedArtistName = updatedArt.artistName;
            const updatedArtistLink = updatedArt.artistLink;
            const nextIndex =
                updatedIndex === ART.length - 1 ? 0 : updatedIndex + 1;
            const nextImage = require(`assets/${ART[nextIndex].asset}`);

            return {
                index: updatedIndex,
                next: nextImage,
                current: updatedImage,
                currentArtistLink: updatedArtistLink,
                currentArtistName: updatedArtistName,
                accentColors: updatedArt.accentColors,
            };
        });
    };

    return (
        <ThemeProvider theme={{ accentColors, currentArt, nextArt }}>
            <div className="container">
                <div className="content-container">
                    <ContentBlock className="header-block">
                        <Header />
                    </ContentBlock>
                    <ContentBlock>
                        <Intro />
                    </ContentBlock>
                    <Credits
                        currentArtistLink={art.currentArtistLink}
                        currentArtistName={art.currentArtistName}
                        onUpdateArt={handleSetArtNumber}
                    />
                </div>
            </div>
            <ArtCanvas />
        </ThemeProvider>
    );
}

export default App;
