import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import {
  BannerContainer,
  BannerWebsiteLogo,
  BuyPremiumBtn,
  BannerCloseBtn,
  BannerTagline,
} from '../styledComponents'

class PrimeDealsSection extends Component {
  state = {showPrimeDealsSection: true}

  onClickClosePrimeDealsSection = () => {
    this.setState({showPrimeDealsSection: false})
  }

  renderPrimeDealsSection = () => (
    <BannerContainer data-testid="banner">
      <div>
        <BannerWebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerTagline>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerTagline>
        <BuyPremiumBtn type="button">GET IT NOW</BuyPremiumBtn>
      </div>
      <BannerCloseBtn
        type="button"
        data-testid="close"
        onClick={this.onClickClosePrimeDealsSection}
      >
        <RiCloseLine style={{color: '#212121', fontSize: '14px'}} />
      </BannerCloseBtn>
    </BannerContainer>
  )

  render() {
    const {showPrimeDealsSection} = this.state
    return (
      <div>{showPrimeDealsSection ? this.renderPrimeDealsSection() : null}</div>
    )
  }
}

export default PrimeDealsSection
