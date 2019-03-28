import * as React from 'react'
import styled from '@emotion/styled'
import * as Img from 'gatsby-image'

import { heights, colors } from '../styles/variables'
import Container from './Container'
import { StaticQuery, graphql } from 'gatsby'
import LineAnimationText from './LineAnimationText'

const StyledHeader = styled.header`
  height: ${heights.header}vh;
  padding: 0;
  background-color: ${colors.black};
  color: ${colors.white};
  position: relative;
  background-position: center;
  background-size: cover;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const HeaderTitle = styled.h1`
  font-size: 48px;
  text-transform: none;
  font-weight: normal;
  line-height: 88px;
`

const KeywordClick = styled.span`
  position: relative;
  display: inline-block;
  line-height: 80px;
  cursor: pointer;
`

interface State {
  selected: HeaderItem
  showBackground: boolean
  hasClicked: boolean
  isHovering: boolean
}

interface HeaderItem {
  index: number
  word: string
  image: any
}

interface Props {
  data: {
    edges: Edge[]
  }
}

interface Edge {
  node: Node
}

interface Node {
  name: string
  media: any
  index: number
}

export const HomeHeaderQuery = graphql`
  query homeHeader {
    allContentfulHomeHeader(sort: { fields: index }) {
      edges {
        node {
          name
          index
          media {
            sizes(quality: 100) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`

class SpaceForHeader extends React.Component<Props, State> {
  items: HeaderItem[] = []

  constructor(props: Props) {
    super(props)
    this.items = props.data.edges.map((edge: Edge) => {
      return {
        index: edge.node.index,
        word: edge.node.name,
        image: edge.node.media.sizes
      }
    })
    this.state = {
      selected: this.items[1],
      showBackground: false,
      hasClicked: false,
      isHovering: false
    }
  }

  handleClick = () => {
    this.setState({ selected: this.getNextHeaderItem() })
  }

  getNextHeaderItem(): HeaderItem {
    let index = this.state.selected.index + 1
    if (index === this.items.length) {
      index = 0
    }
    return this.items[index]
  }

  hideBackground = () => {
    this.setState({ showBackground: false })
  }

  showBackground = () => {
    this.setState({ showBackground: true })
  }

  render() {
    return (
      <StyledHeader>
        <Img.default
          sizes={this.state.selected.image}
          style={{ display: this.state.showBackground ? 'block' : 'none', position: 'absolute', width: '100%', height: '100%' }}
        />
        <HeaderInner>
          <HeaderTitle>
            A space iv{' '}
            <KeywordClick onClick={this.handleClick} onMouseEnter={this.showBackground} onMouseLeave={this.hideBackground}>
              <LineAnimationText text={this.state.selected.word} />
            </KeywordClick>{' '}
            <br />
            web experiences.
          </HeaderTitle>
        </HeaderInner>
      </StyledHeader>
    )
  }
}

export default () => (
  <StaticQuery query={HomeHeaderQuery} render={({ allContentfulHomeHeader }) => <SpaceForHeader data={allContentfulHomeHeader} />} />
)
