import * as S from "./styles"

export default function Cards({image, text}) {

    return (
        <>
            <S.Card>
                <S.ImgCard src={image} alt="" />
                <S.SectionCard>
                    <S.textCard>{text}</S.textCard>
                    <S.buttonCard>Clique aqui</S.buttonCard>
                </S.SectionCard>
            </S.Card>

        </>
    )
}