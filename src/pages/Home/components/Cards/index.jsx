import promotion1 from "../../../../assets/promotion-1.svg"

import * as S from "./styles"

export default function Cards(image, text) {

    return (
        <>

            <S.Card>
                <S.ImgCard src={promotion1} alt="" />
                <S.SectionCard>
                    <S.textCard>venha conhecer nossa nova loja</S.textCard>
                    <S.buttonCard>Clique aqui</S.buttonCard>
                </S.SectionCard>
            </S.Card>

        </>
    )
}