import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideosContext from './context/VideosContext'

import './App.css'

class App extends Component {
  state = {
    darkTheme: false,
    savedVideosList: [],
  }

  changeTheme = () => {
    const {darkTheme} = this.state
    this.setState({darkTheme: !darkTheme})
  }

  addSavedVideoItem = video => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }

  removeSavedVideos = videoId => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(
        video => video.id !== videoId,
      ),
    }))
  }

  render() {
    const {savedVideosList, darkTheme} = this.state

    return (
      <VideosContext.Provider
        value={{
          darkTheme,
          savedVideosList,
          changeTheme: this.changeTheme,
          addSavedVideoItem: this.addSavedVideoItem,
          removeSavedVideos: this.removeSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="bad-path" />
        </Switch>
      </VideosContext.Provider>
    )
  }
}

export default App
