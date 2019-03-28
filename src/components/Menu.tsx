import * as React from 'react'
import styled from '@emotion/styled'
import TopMenu from './TopMenu'
import { widths, fonts } from '../styles/variables'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 200;
  background: black;
  color: white;
`

const MenuBodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const MenuBody = styled.div`
  display: flex;
  height: 500px;
  width: ${widths.xl}px;
  justify-content: space-between;
  align-items: flex-end;
`
const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding-top: 120px;
`
const MenuListItem = styled.li`
  font-size: 64px;
  font-weight: bold;
  font-family: ${fonts.serif};
`
const MenuListItemLink = styled.a`
  color: white;
  position: relative;

  :hover {
    text-decoration: none;

    small {
      transform: translateX(-50%);
    }
    span {
      margin-left: 30px;
    }
  }

  small {
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 136px;
    position: absolute;
    bottom: -10px;
    color: rgba(255, 255, 255, 0.15);
    transform: translateX(-25%);
    pointer-events: none;
  }
  span {
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    margin: 0;
  }
`
const LocationInfo = styled.div`
  font-size: 24px;

  span {
    font-size: 12px;
  }
`

const Menu: React.FunctionComponent<{ onClick: any }> = ({ onClick }) => {
  return (
    <Container>
      <TopMenu menuIsOpen={true} onClick={onClick} />
      <MenuBodyContainer>
        <MenuBody>
          <MenuList>
            <MenuListItem>
              <MenuListItemLink>
                <small>I</small>
                <span>Work</span>
              </MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>
                <small>II</small>
                <span>About</span>
              </MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>
                <small>III</small>
                <span>Contact</span>
              </MenuListItemLink>
            </MenuListItem>
          </MenuList>
          <LocationInfo>
            Space IV <br />
            New Bond Street <br />
            Northgate House <br />
            2nd & 3rd Floors <br />
            Bath <br />
            BA1 1RG <br />
            <hr />
            <span>human@space-iv.com</span>
            <span>@space-iv</span>
          </LocationInfo>
        </MenuBody>
      </MenuBodyContainer>
    </Container>
  )
}

export default Menu
