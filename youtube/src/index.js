import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'
import { debounce } from './tool/helper'
const API_KEY = 'AIzaSyCK5h9Xi-1diuXz_a-D55zwHgWN3MANVXU'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
    this.videoSearch = debounce(this.videoSearch.bind(this), 300)
  }

  videoSearch (term) {
    YTSearch({key:API_KEY, term: term}, (videos) => {
      
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    }) 
  }

  render () {
    return (
      <div>
        <SearchBar
          onSearchTermChange={this.videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    )
  }
}

render(<App />, document.getElementsByClassName('container')[0])
