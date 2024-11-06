import styled from 'styled-components'
import {Link} from 'react-router-dom'

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`

const flexColumn = `
  display: flex;
  flex-direction: column;
`

export const LoginFormContainer = styled.div`
  ${flexColumn}
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;
  font-family: 'Roboto';
`

export const FormContainer = styled.form`
  ${flexColumn}
  align-items: center;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 42px;
`

export const InputContainer = styled.div`
  ${flexColumn}
  margin-top: 20px;
  width: 100%;
`

export const WebsiteLogoImage = styled.img`
  width: 165px;
  margin: 8px 0 24px;
`

export const InputLabel = styled.label`
  margin-bottom: 0;
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
  padding: 8px 16px;
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
  ${flexCenter}
  gap: 5px;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin: 20px 0 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  color: #ff0b37;
`

export const NavbarContainer = styled.nav`
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  ${flexCenter}
  justify-content: space-between;
  padding: 0 25px;
  font-family: 'Roboto';
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 9vh;
`

export const NavbarButtonContent = styled.ul`
  ${flexCenter}
  margin-left: -40px;
  list-style: none;
  gap: 10px;
`

export const WebsiteLogo = styled.img`
  width: 100px;
`

export const NavDesktopItem = styled.div`
  ${flexCenter}
  gap: 10px;
`

export const NavMobileItem = styled.div`
  display: none;
`

export const NavbarButton = styled.button`
  background-color: transparent;
  border: none;
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
  border: 1px solid ${props => (props.borderColor ? '#ebebeb' : '#3b82f6')};
  color: ${props => (props.color ? '#ebebeb' : '#3b82f6')};
  border-radius: 4px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const HomeSection = styled.div`
  font-family: 'Roboto';
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  min-height: 91vh;
  max-height: 100vh;
  display: flex;
  width: 81%;
`

export const MenuSection = styled.div`
  ${flexColumn}
  justify-content: space-between;
  width: 19%;
  position: fixed;
  height: 91vh;
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

export const MenuListItemDark = styled(MenuListItem)`
  background-color: ${props => (props.bgColor ? '#383838' : 'transparent')};
`

export const MenuTabBtn = styled.button`
  ${flexCenter}
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
  padding-left: 20px;
  border: none;
  background-color: transparent;
`

export const MenuTabName = styled.p`
  margin: 7px 0;
  color: ${props => (props.color ? '#000000' : '#181818')};
  font-weight: ${props => (props.fontWeight ? '600' : '500')};
`

export const MenuTabNameDark = styled(MenuTabName)`
  color: ${props => (props.color ? '#f9f9f9' : '#f1f5f9')};
`

export const ContactUsContainer = styled.div`
  margin-left: 20px;
`

export const ContactUsHeading = styled.h1`
  font-size: 14px;
  color: ${props => (props.color ? '#f9f9f9' : '#0f0f0f')};
`

export const ContactUsImgCard = styled.div`
  ${flexCenter}
  justify-content: flex-start;
  gap: 14px;
  margin: 16px 0;
`

export const ContactUsImg = styled.img`
  width: 25px;
  height: 25px;
`

export const ContactUsTagline = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.color ? '#f9f9f9' : '#0f0f0f')};
`

export const AllVideosSectionContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  flex-direction: column;
  font-family: 'Roboto';
  overflow-y: auto;
  position: absolute;
  left: 19%;
  top: 9%;
  width: 81%;
  height: 91vh;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  ${flexCenter}
  justify-content: space-between;
  padding: 23px;
`

export const BannerWebsiteLogo = styled.img`
  width: 130px;
`

export const BannerTagline = styled.p`
  font-size: 15px;
  color: #383838;
  margin-bottom: 30px;
`

export const BuyPremiumBtn = styled.button`
  width: 98px;
  height: 30px;
  background-color: transparent;
  border: solid 1px #909090;
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
`

export const BannerCloseBtn = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: none;
`

export const AllVideosContainer = styled.div`
  padding: 20px;
  height: 91vh;
`

export const SearchInputFeild = styled.input`
  border: solid 1px ${props => (props.borderColor ? '#606060' : '#cbd5e1')};
  color: ${props => (props.color ? '#f1f5f9' : '#475569')};
  width: 40%;
  height: 29px;
  background-color: transparent;
  padding: 5px 13px;
  font-size: 14px;
  border-width: 1px 0 1px 1px;
  border-radius: 2px 0 0 2px;
  outline: none;
`

export const SearchButton = styled.button`
  width: 55px;
  height: 29px;
  padding: 3px;
  border: solid 1px ${props => (props.borderColor ? '#606060' : '#cbd5e1')};
  border-width: 1px 1px 1px 0;
  border-radius: 0 2px 2px 0;
  background-color: ${props => (props.bgColor ? '#383838' : '#ebebeb')};
`

export const LoaderContainer = styled.div`
  height: 66vh;
  ${flexCenter}
`

export const VideosList = styled.ul`
  list-style: none;
  margin-left: -40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const VideosErrorViewContainer = styled.div`
  ${flexColumn}
  justify-content: center;
  height: 79vh;
  align-items: center;
  margin-top: 20px;
`

export const FailureViewContainer = styled(VideosErrorViewContainer)`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  overflow-y: auto;
  position: absolute;
  left: 19%;
  top: 9%;
  width: 81%;
  height: 91vh;
  margin-top: 0;
`

export const FailureViewImg = styled.img`
  width: 280px;
`

export const FailureViewHeading = styled.h1`
  font-size: 21px;
  color: ${props => (props.color ? '#f1f5f9' : '#1e293b')};
`

export const FailureViewDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  margin: 0 0 16px;
`

export const RetryBtn = styled.button`
  width: 100px;
  height: 33px;
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
`

export const HomeCardListItem = styled.li`
  width: 250px;
`

export const HomeCardThumbnailImg = styled.img`
  width: 100%;
`

export const HomeCardVideoContent = styled.div`
  display: flex;
`

export const HomeCardChannelImg = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
`

export const HomeCardVideoAbout = styled.div`
  margin-left: 10px;
`

export const HomeCardTitle = styled.p`
  font-size: 13px;
  color: ${props => (props.color ? '#f1f5f9' : '#181818')};
  font-weight: 500;
`

export const HomeCardChannelName = styled.p`
  color: #475569;
  font-size: 13px;
  font-weight: 500;
  margin: -7px 0 -6px;
`

export const VideoViewAndPublishedTime = styled.p`
  color: #475569;
  font-size: 13px;
  font-weight: 500;
`

export const HomeCardVideoViewAndPublishedTime = styled.div`
  display: flex;
  align-items: center;
`

export const NoSearchViewResultView = styled(VideosErrorViewContainer)``

export const NoSearchViewResultImg = styled(FailureViewImg)``

export const NoSearchViewResultHeading = styled(FailureViewHeading)``

export const NoSearchViewResultText = styled(FailureViewDescription)``

export const TrendingVideoSection = styled(HomeSection)`
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
  position: absolute;
  left: 19%;
  top: 9%;
  width: 81%;
  height: 91vh;
`

export const TrendingVideosLoaderContainer = styled(TrendingVideoSection)`
  ${flexCenter}
`

export const TrendingVideosList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
`

export const GamingVideoSection = styled(HomeSection)`
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
  position: absolute;
  left: 19%;
  top: 9%;
  width: 81%;
  height: 91vh;
`

export const GamingVideosList = styled(TrendingVideosList)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`

export const GamingLinkItem = styled(LinkItem)`
  display: flex;
  flex-direction: column;
  width: 180px;
`

export const VideoItem = styled.li`
  margin-bottom: 40px;
`

export const GamingVideoItemImg = styled.img`
  width: 100%;
  height: 250px;
`

export const GamingVideoTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  margin-top: 13px;
  color: ${props => (props.color ? '#ffffff' : '#1e293b')};
`

export const GamingVideoViewCount = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-top: -5px;
  color: ${props => (props.color ? '#475569' : '#64748b')};
`

export const GamingVideosLoaderContainer = styled(GamingVideoSection)`
  ${flexCenter}
`

export const SavedVideosSection = styled(HomeSection)`
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
  position: absolute;
  left: 19%;
  top: 9%;
  width: 81%;
  height: 91vh;
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 46px;
  background-color: ${props => (props.bgColor ? '#181818' : '#f1f1f1')};
  gap: 20px;
`

export const BannerLogoCard = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#e1e8f0')};
  ${flexCenter}
  height: 72px;
  width: 72px;
  border-radius: 50%;
`

export const BannerHeading = styled.h1`
  margin: 0;
  font-size: 25px;
  color: ${props => (props.color ? '#ffffff' : '#0f0f0f')};
`

export const SavedVideosList = styled(TrendingVideosList)``

export const VideoLinkItem = styled(LinkItem)`
  display: flex;
`

export const VideoCardThumbnailImg = styled.img`
  height: 200px;
  width: 754px;
`

export const VideoCardContent = styled.div`
  width: 100%;
  height: 200px;
  margin-left: 20px;
  overflow-y: auto;
`

export const VideoCardTitle = styled.h1`
  font-size: 21px;
  margin-top: 2px;
  font-weight: 500;
  color: ${props => (props.color ? '#ffffff' : '#231f20')};
`

export const VideoCardName = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-top: -3px;
  color: #94a3b8;
`

export const VideoViewsDateTimeCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: -18px;
`

export const VideoViewsDateTime = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #94a3b8;
`

export const NoSavedVideosSection = styled.p`
  ${flexColumn}
  justify-content: center;
  align-items: center;
  height: 91vh;
  width: 100%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const NoSavedVideosImg = styled.img`
  width: 56%;
`

export const NoSavedVideosHeading = styled.h1`
  font-size: 18px;
  margin-top: 36px;
  color: ${props => (props.color ? '#ffffff' : '#0f0f0f')};
`

export const NoSavedVideosTxt = styled.p`
  font-size: 14px;
  color: ${props => (props.color ? '#f8fafc' : '#475569')};
`

export const VideoItemDetailsSection = styled(HomeSection)`
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
  position: absolute;
  left: 19%;
  top: 9%;
  width: 81%;
  padding: 20px;
  height: 91vh;
`

export const VideoItemDetailsLoaderContainer = styled(VideoItemDetailsSection)`
  ${flexCenter}
`

export const VideoItemDetailsButtonCard = styled.div`
  display: flex;
  gap: 4px;
`

export const VideoItemDetailsButton = styled.button`
  font-size: 13px;
  background-color: transparent;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${props => (props.color ? '#2563eb' : '#94a3b8')};
`

export const VideoItemDetailsHeading = styled(HomeCardTitle)`
  font-size: 14px;
  margin: 19px 0 17px;
  color: ${props => (props.color ? '#f4f4f4' : '#1e293b')};
`

export const VideoElementCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VideoItemDetailsViewAndDateTime = styled.div`
  display: flex;
  align-items: center;
`

export const VideoItemViewAndPublishedTime = styled(VideoViewAndPublishedTime)`
  margin: 0;
  color: #94a3b8;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  margin: 20px 0 30px;
  border-top-color: ${props => (props.borderColor ? '#475569' : '#f7f7f747')};
  border-width: 2px 0 0 0;
`

export const VideoItemContent = styled.div`
  display: flex;
  align-items: flex-start;
`

export const VideoItemImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

export const VideoItemName = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 7px;
  color: ${props => (props.color ? '#f4f4f4' : '#1e293b')};
`

export const VideoItemSubscriberCount = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: #475569;
`

export const VideoItemDescription = styled.p`
  font-size: 13px;
  margin-top: 30px;
  font-weight: 500;
  color: ${props => (props.color ? '#f4f4f4' : '#424242')};
`

export const NotFoundContainer = styled(VideoItemDetailsSection)`
  ${flexCenter}
`

export const NotFoundImg = styled.img`
  width: 42%;
`

export const NotFoundHeading = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${props => (props.color ? '#ffffff' : '#1e293b')};
`

export const NotFoundText = styled.p`
  font-weight: 500;
  color: ${props => (props.color ? '#909090' : '#424242')};
`

export const LogoutConfirmation = styled.p`
  color: ${props => (props.color ? '#ebebeb' : '#00306e')};
  margin-top: 0;
  font-size: 15px;
  font-weight: 500;
`

export const CancelLogoutBtn = styled(RetryBtn)`
  border-radius: 0;
  background-color: transparent;
  border: solid 1px #7e858e;
  color: #7e858e;
  margin-right: 10px;
`

export const ConfirmLogoutBtn = styled(RetryBtn)`
  margin-left: 10px;
  background-color: #3b82f6;
  border-radius: 0;
`
