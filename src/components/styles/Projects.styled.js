import styled from "styled-components";

export const StyledProjects = styled.div`

min-height: 100vh;


.project-items {
margin: 5em 0;
display: flex;
/* flex-direction: column; */
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 5rem;

}

.project-items > * {
    flex: 1 1 50%;
}

.project-scroller {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    gap: 3rem;

    overflow-x: auto;
    overscroll-behavior-inline: contain;
}

.snaps-inline {
    scroll-snap-type: inline mandatory;

}

.snaps-inline > * {
    scroll-snap-align: start;
}



`;
