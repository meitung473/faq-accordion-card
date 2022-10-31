import { ThemeProvider } from "styled-components";

import { br } from "./utils/Device";
import { GlobalStyle } from "./style/GlobalStyle";

import { Container, Wrapper, Title, Box, SVGContainer } from "./App.style";
import { theme } from "./style/theme";

import { Accordion, MobileSVG, DesktopBox, DesktopSVG } from "./components";

import data from "./doc/content.json";
import { useMediaQuery } from "./Hooks/useMediaqurey";
import { ResetStyle } from "./utils/globalStyle";

export default function FaqAccordion() {
    const isMd = useMediaQuery(br.md);
    return (
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <GlobalStyle />
            <Container>
                <Wrapper>
                    {/* SVG component */}
                    <SVGContainer>
                        {isMd ? <DesktopSVG /> : <MobileSVG />}
                    </SVGContainer>
                    {isMd && <DesktopBox />}
                    {/* main */}
                    <Box>
                        <Title>FAQ</Title>
                        {data.map(({ question, answer }) => (
                            <Accordion
                                key={question}
                                question={question}
                                answer={answer}
                            />
                        ))}
                    </Box>
                </Wrapper>
                <div
                    className="attribution"
                    style={{
                        position: "absolute",
                        bottom: ".5rem",
                        color: "#fff",
                    }}
                >
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        style={{
                            color: "#fff",
                            textDecoration: "underline",
                        }}
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{" "}
                    <a
                        href="https://blog.rosa.tw"
                        style={{
                            color: "#fff",
                            textDecoration: "underline",
                        }}
                    >
                        Rosa
                    </a>
                    .
                </div>
            </Container>
        </ThemeProvider>
    );
}
