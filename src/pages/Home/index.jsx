import bigmac from "../../assets/bigmac.svg"
import potato from "../../assets/potato.svg"
import icecream from "../../assets/icecream.svg"

import Header from "../../components/Header/index.jsx"
import Cards from "./components/Cards/index.jsx"

import * as S from "./styles.js"
export default function Home() {

    return (
        <>
            <Header />

            <main>
                <S.Container1>
                    <S.SectionBanner>
                        <S.ImgBanner src={bigmac} alt="Hamburguer Big Mac" />
                        <S.textBannner>
                            BATEU AQUELA <span className="colorRed">#FOME</span> DE <span className="colorRed">MÉQUI</span>
                        </S.textBannner>
                    </S.SectionBanner>

                    <S.SectionProdutos>
                        <S.ImgProduto src={bigmac} alt="Hamburguer Big Mac" />
                        <img src={potato} alt="Batata frita" />
                        <img src={icecream} alt="Sorvete" />
                    </S.SectionProdutos>
                </S.Container1>

                <S.Container2>
                <S.Title>Promoção</S.Title>
                    <section>
                        <Cards />
                    </section>
                </S.Container2>
            </main>

        </>
    )
}