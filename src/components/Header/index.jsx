import logo from '../../assets/logo.svg';
import cell1 from '../../assets/cell1.svg';
import cell2 from '../../assets/cell-2.svg'

import * as S from './styles'

export default function Header({yellow, bold, borderSolid}) {


  return (

    <S.Header>

      <S.Img src={logo} alt="Logo MC DONALD'S" />


      <S.AppSection>

          <S.AppDiv href="">
            <img src={cell1} alt="APP MAC" />
            Baixe o App
          </S.AppDiv>

          <S.AppDiv yellow={true} bold={true} borderSolid={true} href="">
            Peça seu Méqui
            <img src={cell2} alt="APP MAC" />
          </S.AppDiv>
      </S.AppSection>

    </S.Header>

  )


}
