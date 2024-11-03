import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;
  font-family: 'Roboto';
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  flex-shrink: 0;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 42px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const WebsiteLogoImage = styled.img`
  width: 165px;
  margin: 8px 0 24px 0;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #64748b;
`

export const InputField = styled.input`
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: transparent;
  color: #475569;
  border-radius: 5px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const ShowPasswordInput = styled(InputField)`
  align-self: center;
  margin-top: 3px;
`

export const ShowPasswordLabel = styled(InputLabel)`
  color: #0f0f0f;
  font-weight: 500;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  font-family: 'Roboto';
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

export const NavbarButtonContent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -40px;
  list-style: none;
  gap: 10px;
`

export const WebsiteLogo = styled.img`
  width: 100px;
`

export const NavDesktopItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const NavMobileItem = styled.div`
  display: none;
`

export const NavbarButton = styled.button`
  background-color: transparent;
  border-width: 0;
`

export const ProfileImg = styled.img`
  width: 21px;
`

export const LogoutButton = styled.button`
  margin-bottom: 3px;
  width: 68px;
  height: 26px;
  font-size: 13px;
  font-weight: 600;
  background-color: transparent;
  border-width: 1px;
  border-radius: 4px;
  color: ${props => (props.color ? '#ebebeb' : '#3b82f6')};
  border-color: ${props => (props.borderColor ? '#ebebeb' : '#3b82f6')};
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const HomeSection = styled.div`
  font-family: 'Roboto';
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  background-size: cover;
  min-height: 100vh;
  font-family: 'Roboto';
  display: flex;
  width: 81%;
`

export const MenuSection = styled.div`
  width: 19%;
  position: fixed;
  height: 100vh;
  top: 9%;
  left: 0;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
`

export const MenuList = styled.ul`
  list-style: none;
  margin-left: -40px;
`

export const MenuListItem = styled.li`
  background-color: ${props => (props.bgColor ? '#f1f5f9' : 'transparent')};
`

export const MenuTabBtn = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding-left: 20px;
  border-width: 0;
  background-color: transparent;
`

export const MenuTabName = styled.p`
  margin: 7px 0;
  color: ${props => (props.color ? '#000000' : '#181818')};
  font-weight: ${props => (props.fontWeight ? '600' : '500')};
`

export const AllVideosSectionContainer = styled.div`
  flex-direction: column;
  font-family: 'Roboto';
  overflow-y: auto;
  position: absolute;
  left: 19%;
  top: 9%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const TrendingVideoSection = styled(HomeSection)`
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingVideoSection = styled(HomeSection)`
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosSection = styled(HomeSection)`
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoItemDetailsSection = styled(HomeSection)`
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoItemDetailsButton = styled.button`
  display: flex;
  align-items: center;
  width: 80px;
  gap: 6px;
`

export const VideoItemDetailsBtnText = styled.p`
  font-size: 15px;
  margin: 0;
`
