function SongList(props) {
  return props.songs.map((song) => {
    return (
      <tr key={song.key}>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.rating}</td>
      </tr>
    );
  });
}

export default SongList;
