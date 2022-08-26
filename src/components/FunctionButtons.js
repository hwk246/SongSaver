import React from "react";
import { resetAll } from "../redux/features/songSlice";
import { orderBySongAZ } from "../redux/features/songSlice";
import { orderBySongZA } from "../redux/features/songSlice";
import { useDispatch } from "react-redux";

const FunctionButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="functional-buttons">
      <button onClick={() => dispatch(orderBySongAZ())}>
        Order Songs (A-Z)
      </button>
      <button onClick={() => dispatch(orderBySongZA())}>
        Order Songs (Z-A)
      </button>
      <button onClick={() => dispatch(resetAll())}>Reset Playlist</button>
    </div>
  );
};

export default FunctionButtons;
