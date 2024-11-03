import React from 'react'

const VideosContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  savedVideosList: [],
  addSavedVideoItem: () => {},
  removeSavedVideos: () => {},
})

export default VideosContext
