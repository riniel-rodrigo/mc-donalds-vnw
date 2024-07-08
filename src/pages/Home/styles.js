import styled from "styled-components";

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 37rem;
  background-color: #ffc72c;

  @media (max-width: 700px) {
    height: 40rem;
  }
`;

export const SectionBanner = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  padding-top: 4.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    gap:1rem;
  }
`;

export const ImgBanner = styled.img`
  width: 20.25rem;
  height: 18.75rem;

  @media (max-width: 768px) {
    width: 15rem;
    height: 14.5rem;
  }

  @media (max-width: 700px) {
    width: 17rem;
    height: 15rem;
  }

  @media (max-width: 475px) {
    width: 14rem;
    height: 13rem;
  }
`;

export const textBannner = styled.h1`
  width: 33rem;
  font-size: 3.125rem;
  color: #fff;
  .colorRed {
    color: #db0007;
  }

  @media (max-width: 700px) {
    width: 27rem;
    text-align: center;
  }

  @media (max-width: 475px) {
    font-size: 2.5rem;
  }

  @media (max-width: 400px) {
    width:100%;
    padding:0.5rem;
  }
`;

export const SectionProdutos = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.81rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 375px) {
    gap: 1rem;
    justify-content:space-evenly;
  }

  img{
    @media (max-width: 375px) {
        width: 4rem;
        height: 4rem;
    }
  }
`;

export const ImgProduto = styled.img`
  width: 7.5rem;
  height: 6.25rem;

    @media (max-width: 375px) {
        width: 3rem !important;
        height: 3rem !important;
    }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.125rem;
  padding: 3.625rem 4rem;
  height: 35rem;
  background-color: #feb706;

  @media (max-width: 1112px) {
    padding: 3.625rem 1rem;
  }

  @media (max-width: 1024px) {
    height: 100%;
  }

  @media (max-width: 475px) {
    gap: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  color: #fff;
`;

export const RowCards = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 850px) {
    gap: 1.5rem;
  }
`;
