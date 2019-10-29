import React, { Component } from "react";
import Playlists from "./Playlists";

class App extends Component {
  constructor() {
    super();
    this.state = {
      accessToken: "",
      refreshToken: ""
    };
  }
  componentDidMount() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    this.setState({ accessToken: hashParams.access_token });
    this.setState({ refreshToken: hashParams.refresh_token });
  }
  render() {
    return (
      <div className="container-login">
        {this.state.accessToken != undefined ? (
          <Playlists accessToken={this.state.accessToken} />
        ) : (
          <div className="login">
            <img src="spotifylogo.png"></img>
            <a href="/login" className="btn btn-dark">
              Log in with Spotify
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default App;
