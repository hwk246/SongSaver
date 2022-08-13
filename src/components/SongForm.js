import { useState } from "react";

function SongForm(props) {
  const [newSong, setNewSong] = useState({ key: 0 });
  const [key, setKey] = useState(1);

  function addToLocalState(e) {
    const { name, value } = e.target;
    setNewSong({ ...newSong, [name]: value });
  }

  function addKey() {
    setKey(key + 1);
    setNewSong({ ...newSong, key: key });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addKey();
    props.addSong(newSong);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => addToLocalState(e)}
          type="text"
          placeholder="Title"
          name="title"
        ></input>
        <input
          onChange={(e) => addToLocalState(e)}
          type="text"
          placeholder="Artist"
          name="artist"
        ></input>
        <select onClick={addToLocalState} name="genre">
          <option placeholder="genre"></option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
          <option value="classic">Classic</option>
        </select>
        <select onClick={addToLocalState} name="rating">
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}

export default SongForm;
