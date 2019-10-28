import React, { Component } from "react";
import Playlists from "./Playlists";

class App extends Component {
  render() {
    return (
      <div className="container">
        <a href="/login" class="btn btn-primary">
          Log in with Spotify
        </a>

        <Playlists />
      </div>
    );
  }
}

export default App;
