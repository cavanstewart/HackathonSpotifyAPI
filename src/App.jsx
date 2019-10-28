import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      accessToken: "",
      refreshToken: "",
      playlists: [],
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

    fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
        headers: {
            Authorization: "Bearer " + hashParams.access_token
        }
    }).then(res => res.json()).then(data => this.setState({ playlists: data.items }));
  }

  render() {
    return (
      this.state.accessToken != undefined && (
        <div className="container">
            <div>
                <h6>Playlists</h6>
                {this.state.playlists.map( (obj, index) => (
                    <li key={index} >{obj.name}</li>
                ))}
            </div>
        </div>
      )
    );
  }
}

export default App;
