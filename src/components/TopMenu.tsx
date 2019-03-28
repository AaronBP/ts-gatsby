import styled from '@emotion/styled'
import { MenuSVG } from '../content/icons/Menu'
import { LogoSVG } from '../content/icons/Logo'
import { MenuCloseSVG } from '../content/icons/MenuClose'

const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px;
  position: absolute;
  z-index: 100;
  width: 100%;
`

const TopMenu: React.FunctionComponent<{ menuIsOpen: boolean; onClick: any }> = ({ menuIsOpen, onClick }) => {
  const menuIcon: any = menuIsOpen ? (
    <div onClick={onClick}>
      <MenuCloseSVG />
    </div>
  ) : (
    <div onClick={onClick}>
      <MenuSVG />
    </div>
  )
  return (
    <HeaderTop>
      <a href="/">
        <LogoSVG />
      </a>
      {menuIcon}
    </HeaderTop>
  )
}

export default TopMenu
