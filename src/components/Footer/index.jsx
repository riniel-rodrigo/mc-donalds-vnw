import logo from "../../assets/logo.svg"
import PlayStore from "../../assets/play-store.svg"
import AppStore from "../../assets/app-store.svg"

import * as S from "./index.js"

export default function index() {
    return (

        <S.Footer>
            <S.SectionBrand>
                <S.Logo src={logo} alt="Logo MC Donalds" />
                <S.Text>© McDonald’s 2024</S.Text>
            </S.SectionBrand>

            <S.SectionADownloadApp>
                <S.ImgApp src={PlayStore} alt="Download PlayStore" />
                <S.ImgApp src={AppStore} alt="Download AppStore" />
            </S.SectionADownloadApp>

        </S.Footer>

    )
}

