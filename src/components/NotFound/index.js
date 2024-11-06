import VideosContext from '../../context/VideosContext'
import Header from '../Header'
import MenuItem from '../MenuItem'

import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from '../styledComponents'

const NotFound = () => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <>
          <Header />
          <div>
            <MenuItem />
            <NotFoundContainer bgColor={darkTheme}>
              <NotFoundImg
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading color={darkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText color={darkTheme}>
                we are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </div>
        </>
      )
    }}
  </VideosContext.Consumer>
)

export default NotFound
