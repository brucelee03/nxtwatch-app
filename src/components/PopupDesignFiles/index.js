import VideosContext from '../../context/VideosContext'

const PopupDesignFiles = props => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {logoutButton, closePopup} = props

      const onConfirmLogout = () => {
        logoutButton()
      }

      return (
        <>
          <p>Are you sure you want to logout?</p>
          <div>
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              type="button"
              data-testid="confirmButton"
              onClick={onConfirmLogout}
            >
              Confirm
            </button>
          </div>
        </>
      )
    }}
  </VideosContext.Consumer>
)

export default PopupDesignFiles
