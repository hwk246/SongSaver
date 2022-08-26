import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnotherSong } from "../redux/features/songSlice";

function SongForm() {
  const dispatch = useDispatch();
  const [newSong, setNewSong] = useState({ key: 1 });
  const [key, setKey] = useState(2);

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
    dispatch(addAnotherSong(newSong));
  }

  return (
    <div className="song-form">
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
        <label>
          genre:
          <select onChange={addToLocalState} name="genre">
            <option placeholder="genre"></option>
            <option value="jazz">Jazz</option>
            <option value="pop">Pop</option>
            <option value="classic">Classic</option>
          </select>
        </label>
        <label>
          rating:{" "}
          <select onChange={addToLocalState} name="rating">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}

export default SongForm;
