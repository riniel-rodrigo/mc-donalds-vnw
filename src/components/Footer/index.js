import styled from "styled-components";

export const Footer = styled.footer`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem 2.25rem;
    background-color:#FFFFFF;

    @media (max-width: 700px) {
        padding:1rem 0.5rem;
    }

    @media (max-width: 375px) {
        flex-direction:column;
        gap:1rem;
    }
`;

export const SectionBrand = styled.section`
    display:flex;
    justify-content:space-between;
    align-items: center;
    gap:0.9rem;
`;

export const Logo = styled.img`
    width:1.5rem;
    height:1.25rem;
`;

export const Text = styled.p`
    font-size:1rem;
    font-family: "Roboto", sans-serif !important;
    font-weight: 100;

    @media (max-width: 700px) {
        font-size:0.75rem;
    }
`;

export const SectionADownloadApp = styled.section`
    display:flex;
    gap:2.25rem;

    @media (max-width: 700px) {
        gap:0.5rem;
    }
`;

export const ImgApp = styled.img`
    width:8rem;
    height:2.5rem;
    cursor: pointer;

    @media (max-width: 700px) {
        width:6rem;
        height:2rem;
    }
`;