import { useSelector } from "react-redux";

function SongList() {
  const titel = useSelector((state) => state.reduxSong.songs);
  console.log(titel);
  return titel.map((liedje) => (
    <tr>
      <td>{liedje.title}</td>
      <td>{liedje.artist}</td>
      <td>{liedje.genre}</td>
      <td>{liedje.rating}</td>
    </tr>
  ));
}

export default SongList;
