import VideosContext from '../../context/VideosContext'
import Header from '../Header'
import MenuItem from '../MenuItem'

const NotFound = () => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <>
          <Header />
          <div>
            <MenuItem />
            <div className="not-found-container">
              <img
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
                className="not-found-img"
              />
              <h1 className="not-found-heading">Page Not Found</h1>
              <p className="not-found-msg">
                We are sorry, the page you requested could not be found.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </VideosContext.Consumer>
)

export default NotFound
