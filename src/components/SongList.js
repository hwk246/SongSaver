import { useSelector } from "react-redux";

function SongList() {
  const songTitles = useSelector((state) => state.reduxSong.songs);
  return songTitles.map((song, index) => (
    <tr key={index}>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.genre}</td>
      <td>{song.rating}</td>
    </tr>
  ));
}

export default SongList;
