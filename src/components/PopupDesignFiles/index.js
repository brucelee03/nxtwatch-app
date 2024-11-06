import VideosContext from '../../context/VideosContext'

import {
  LogoutConfirmation,
  CancelLogoutBtn,
  ConfirmLogoutBtn,
} from '../styledComponents'

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
          <LogoutConfirmation color={darkTheme}>
            Are you sure, you want to logout?
          </LogoutConfirmation>
          <div>
            <CancelLogoutBtn
              type="button"
              data-testid="closeButton"
              onClick={closePopup}
            >
              Cancel
            </CancelLogoutBtn>
            <ConfirmLogoutBtn type="button" onClick={onConfirmLogout}>
              Confirm
            </ConfirmLogoutBtn>
          </div>
        </>
      )
    }}
  </VideosContext.Consumer>
)

export default PopupDesignFiles
