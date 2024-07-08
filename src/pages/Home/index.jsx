import bigmac from "../../assets/bigmac.svg"
import potato from "../../assets/potato.svg"
import icecream from "../../assets/icecream.svg"
import promotion1 from "../../assets/promotion-1.svg"
import promotion2 from "../../assets/promotion-2.svg"
import promotion3 from "../../assets/promotion-3.svg"

import Header from "../../components/Header/index.jsx"
import Card from "./components/Cards/index.jsx"
import Footer from "../../components/Footer/index.jsx"

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
                    <S.RowCards>
                        <Card image={promotion1} text={"Que tal um #MéquiNoSofá?"}/>
                        <Card image={promotion2} text={"Venha conhecer nossa nova loja"}/>
                        <Card image={promotion3} text={"Confira as medidas que o Méqui adotou!"}/>
                    </S.RowCards>
                </S.Container2>
            </main>

            <Footer />

        </>
    )
}