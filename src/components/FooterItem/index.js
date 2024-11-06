import VideosContext from '../../context/VideosContext'

import {
  ContactUsContainer,
  ContactUsHeading,
  ContactUsImgCard,
  ContactUsImg,
  ContactUsTagline,
} from '../styledComponents'

const FooterItem = () => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <ContactUsContainer>
          <ContactUsHeading color={darkTheme}>CONTACT US</ContactUsHeading>
          <ContactUsImgCard>
            <ContactUsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <ContactUsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <ContactUsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </ContactUsImgCard>
          <ContactUsTagline color={darkTheme}>
            Enjoy! Now to see your channels and recommendations!
          </ContactUsTagline>
        </ContactUsContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default FooterItem
