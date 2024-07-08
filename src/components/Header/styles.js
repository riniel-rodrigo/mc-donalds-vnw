import styled from "styled-components"

export const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:5.4rem;
    padding:0 5.4rem;

    @media (max-width: 1024px) {
        padding:0 2rem;
    }

    @media (max-width: 375px) {
        padding:0.5rem;
    }
`;

export const Img = styled.img`
    width:3.75rem;
    height:3.125rem;
    cursor:pointer;

    @media (max-width: 600px) {
        width: 2.5rem;
        height: 2.6rem;
    }
`;

export const AppSection = styled.section`
    display:flex;
    gap:1rem;

    @media (max-width: 375px) {
        gap:0;
    }
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

    @media (max-width: 1024px) {
        width:9rem;
        height:2.3rem;
        
        img{
            width:1.5rem;
            height:1.5rem;
        }
    }

    @media (max-width: 600px) {
        width:8rem;
        height:2.1rem;
        font-size:0.70rem;

        img{
            width:1.4rem;
            height:1.4rem;
        }
    }

    @media (max-width: 375px) {
        width:6.5rem;
        height:2.1rem;
        font-size:0.60rem;
        font-weight:500;
        gap:0;

        img{
            width:1.4rem;
            height:1.4rem;
        }
    }
`;