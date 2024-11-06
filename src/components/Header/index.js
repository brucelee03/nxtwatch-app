import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {FaMoon} from 'react-icons/fa'
import {RiCloseLine} from 'react-icons/ri'
import {MdOutlineLightMode, MdLogout, MdOutlineMenu} from 'react-icons/md'

import VideosContext from '../../context/VideosContext'
import PopupDesignFiles from '../PopupDesignFiles'
import MenuItem from '../MenuItem'

import {
  NavbarContainer,
  NavbarButtonContent,
  NavDesktopItem,
  NavMobileItem,
  WebsiteLogo,
  NavbarButton,
  LogoutButton,
  ProfileImg,
} from '../styledComponents'

const Header = props => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme, changeTheme} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        changeTheme()
      }

      const customStyles = {
        content: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '151px',
          width: '35%',
          padding: '30px',
          borderRadius: '10px',
          backgroundColor: darkTheme ? '#212121' : '#ffffff',
          border: 'none',
        },
      }

      return (
        <NavbarContainer bgColor={darkTheme}>
          <Link to="/">
            <WebsiteLogo
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <NavbarButtonContent>
            <li>
              <NavbarButton
                type="button"
                onClick={onChangeTheme}
                data-testid="theme"
              >
                {darkTheme ? (
                  <MdOutlineLightMode
                    style={{color: '#f9f9f9', fontSize: '19px'}}
                  />
                ) : (
                  <FaMoon style={{color: '#0f0f0f', fontSize: '19px'}} />
                )}
              </NavbarButton>
            </li>
            <li>
              <NavDesktopItem>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      color={darkTheme}
                      borderColor={darkTheme}
                    >
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                  contentStyle={customStyles.content}
                >
                  {close => (
                    <PopupDesignFiles
                      closePopup={close}
                      logoutButton={onClickLogout}
                    />
                  )}
                </Popup>
              </NavDesktopItem>
            </li>
            <li>
              <NavMobileItem>
                <Popup
                  modal
                  trigger={
                    <button type="button">
                      <MdOutlineMenu />
                    </button>
                  }
                  className="popup-content"
                  contentStyle={customStyles.content}
                >
                  {close => (
                    <>
                      <button
                        type="button"
                        className="close-button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        <RiCloseLine
                          styledIcon={{color: '#223a5f', fontSize: '13px'}}
                        />
                      </button>
                      <MenuItem />
                    </>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button">
                      <MdLogout />
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupDesignFiles
                      closePopup={close}
                      logoutButton={onClickLogout}
                    />
                  )}
                </Popup>
              </NavMobileItem>
            </li>
          </NavbarButtonContent>
        </NavbarContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default withRouter(Header)
