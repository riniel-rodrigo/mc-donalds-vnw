import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    width:17rem;
    height:18.75rem;
    border-radius:1.25rem;
    background-color:#FFF;
    transition: 0.3s ease;

    &:hover{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 15px 0px;
    cursor:pointer;
}
`;

export const ImgCard = styled.img`
    width:100%;
    height:9.75rem;
`;

export const SectionCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    height:100%;
    padding:0.5rem 2rem 1.5rem 2rem;
`;

export const textCard = styled.p`
    font-size:1.15rem;
    font-weight:600;
`;

export const buttonCard = styled.button`
    all: unset;
    width:10rem;
    height:2.5rem;
    text-align: center;
    font-size:1.15rem;
    background-color:#FFBC0D;
    border-radius:0.625rem;
    cursor:pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(1.01); /* Aumenta ligeiramente o tamanho do botão */
    }
    
`;