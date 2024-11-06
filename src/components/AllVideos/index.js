import PrimeDealsSection from '../PrimeDealsSection'
import AllVideosSection from '../AllVideosSection'

import {AllVideosSectionContainer} from '../styledComponents'
import VideosContext from '../../context/VideosContext'

const AllVideos = () => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <AllVideosSectionContainer bgColor={darkTheme} data-testid="home">
          <PrimeDealsSection />
          <AllVideosSection />
        </AllVideosSectionContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default AllVideos
