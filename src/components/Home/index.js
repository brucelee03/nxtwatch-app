import VideosContext from '../../context/VideosContext'

import MenuItem from '../MenuItem'
import AllVideos from '../AllVideos'
import Header from '../Header'

import {HomeSection} from '../styledComponents'

const Home = () => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <div>
          <Header />
          <HomeSection bgColor={darkTheme}>
            <MenuItem />
            <AllVideos />
          </HomeSection>
        </div>
      )
    }}
  </VideosContext.Consumer>
)

export default Home
