import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdOutlinePlaylistAdd} from 'react-icons/md'

import {
  MenuSection,
  MenuList,
  MenuListItem,
  MenuTabName,
  MenuTabBtn,
  LinkItem,
} from '../styledComponents'

import VideosContext from '../../context/VideosContext'
import FooterItem from '../FooterItem'

class MenuItem extends Component {
  state = {
    activeTab: 'Home',
  }

  onClickTab = tab => {
    this.setState({activeTab: tab})
  }

  renderMenuItem = () => (
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        const {activeTab} = this.state
        return (
          <MenuSection bgColor={darkTheme}>
            <MenuList>
              <MenuListItem bgColor={activeTab === 'Home'}>
                <LinkItem to="/">
                  <MenuTabBtn
                    type="button"
                    onClick={() => this.onClickTab('Home')}
                  >
                    <AiFillHome
                      style={{
                        fontSize: '16px',
                        color: activeTab === 'Home' ? '#ff0000' : '#5e5e5e',
                      }}
                    />
                    <MenuTabName
                      fontWeight={activeTab === 'Home'}
                      color={activeTab === 'Home'}
                    >
                      Home
                    </MenuTabName>
                  </MenuTabBtn>
                </LinkItem>
              </MenuListItem>
              <MenuListItem bgColor={activeTab === 'Trending'}>
                <LinkItem to="/trending">
                  <MenuTabBtn
                    type="button"
                    onClick={() => this.onClickTab('Trending')}
                  >
                    <HiFire
                      style={{
                        fontSize: '16px',
                        color: activeTab === 'Trending' ? '#ff0000' : '#5e5e5e',
                      }}
                    />
                    <MenuTabName
                      fontWeight={activeTab === 'Trending'}
                      color={activeTab === 'Trending'}
                    >
                      Trending
                    </MenuTabName>
                  </MenuTabBtn>
                </LinkItem>
              </MenuListItem>
              <MenuListItem bgColor={activeTab === 'Gaming'}>
                <LinkItem to="/gaming">
                  <MenuTabBtn
                    type="button"
                    onClick={() => this.onClickTab('Gaming')}
                  >
                    <SiYoutubegaming
                      style={{
                        fontSize: '16px',
                        color: activeTab === 'Gaming' ? '#ff0000' : '#5e5e5e',
                      }}
                    />
                    <MenuTabName
                      fontWeight={activeTab === 'Gaming'}
                      color={activeTab === 'Gaming'}
                    >
                      Gaming
                    </MenuTabName>
                  </MenuTabBtn>
                </LinkItem>
              </MenuListItem>
              <MenuListItem bgColor={activeTab === 'SavedVideos'}>
                <LinkItem to="/saved-videos">
                  <MenuTabBtn
                    type="button"
                    onClick={() => this.onClickTab('SavedVideos')}
                  >
                    <MdOutlinePlaylistAdd
                      style={{
                        fontSize: '16px',
                        color:
                          activeTab === 'SavedVideos' ? '#ff0000' : '#5e5e5e',
                      }}
                    />
                    <MenuTabName
                      fontWeight={activeTab === 'SavedVideos'}
                      color={activeTab === 'SavedVideos'}
                    >
                      Saved Videos
                    </MenuTabName>
                  </MenuTabBtn>
                </LinkItem>
              </MenuListItem>
            </MenuList>
            <FooterItem />
          </MenuSection>
        )
      }}
    </VideosContext.Consumer>
  )

  render() {
    return <>{this.renderMenuItem()}</>
  }
}

export default MenuItem
