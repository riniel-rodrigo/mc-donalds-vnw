import styled from "styled-components"

export const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:5.4rem;
    padding:0 5.4rem;
`;

export const Img = styled.img`
    width:3.75rem;
    height:3.125rem;
    cursor:pointer;
`;

export const AppSection = styled.section`
    display:flex;
    gap:1rem;
`;

export const AppDiv = styled.div `
    all: unset;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.5rem;
    width:10.19rem;
    height:2.8rem;
    background-color: ${(props) => (props.yellow ? '#FFC72C' : '#FFF')};
    font-weight: ${(props) => (props.bold ? '700' : '500')};
    font-size:0.75rem;
    border: ${(props) => (props.borderSolid ? 'solid 1px black' : 'none')};
    border-radius:0.5rem;
    cursor:pointer;
`;