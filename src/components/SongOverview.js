import { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  addSong = (song) => {
    this.setState({
      songs: [
        ...this.state.songs,
        {
          key: song.key,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <h1>Playlist</h1>
        <SongForm addSong={this.addSong} />
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="song-header">
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
          </thead>
          <tbody>
            <SongList songs={this.state.songs} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongOverview;
