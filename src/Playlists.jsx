import React, { Component } from "react";

class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      playlistURI: ""
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.accessToken !== prevProps.accessToken) {
      fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
        headers: {
          Authorization: "Bearer " + this.props.accessToken
        }
      })
        .then(res => res.json())
        .then(data => this.setState({ playlists: data.items }));
    }
  }

  handleClick(obj) {
    this.setState({ playlistURI: obj.uri });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-group-vertical">
              {this.state.playlists.map((obj, index) => (
                <button
                  onClick={() => this.handleClick(obj)}
                  className="btn btn-dark"
                  key={index}
                >
                  {obj.name}
                </button>
              ))}
            </div>
          </div>
          <div className="col">
            {this.state.playlistURI !== "" && (
              <iframe
                title="spotify:playlist:050fIat4Fq2OYgFx5glqyy"
                src={`https://open.spotify.com/embed?uri=${this.state.playlistURI}`}
                allow="encrypted-media"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Playlists;
