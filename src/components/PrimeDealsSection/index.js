import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

class PrimeDealsSection extends Component {
  state = {showPrimeDealsSection: true}

  onClickClosePrimeDealsSection = () => {
    this.setState({showPrimeDealsSection: false})
  }

  renderPrimeDealsSection = () => (
    <div data-testid="banner">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
          alt="nxt watch logo"
        />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <button type="button">GET IT NOW</button>
      </div>
      <button
        type="button"
        className="close-button"
        data-testid="close"
        onClick={this.onClickClosePrimeDealsSection}
      >
        <RiCloseLine style={{color: '#223a5f', fontSize: '13px'}} />
      </button>
    </div>
  )

  render() {
    const {showPrimeDealsSection} = this.state
    return (
      <div>{showPrimeDealsSection ? this.renderPrimeDealsSection() : null}</div>
    )
  }
}

export default PrimeDealsSection
