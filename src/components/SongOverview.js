import FunctionButtons from "./FunctionButtons";
import SongForm from "./SongForm";
import SongList from "./SongList";

function SongOverview() {
  return (
    <div>
      <h1>Playlist</h1>
      <SongForm />
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
          <SongList />
        </tbody>
      </table>
      <FunctionButtons />
    </div>
  );
}

export default SongOverview;
