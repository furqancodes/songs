import React from "react";
import { connect } from "react-redux";
const SongDetail = ({ selectedSong }) => {
  if (selectedSong) {
    return (
      <div>
        <h2>Details for :</h2>
        <b> Song Title :</b>
        <p>{selectedSong.title}</p>
        <b>Song Duration :</b> <p>{selectedSong.duration}</p>
      </div>
    );
  }
  return <h1> Please Select a Song</h1>;
};
const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectionSong,
  };
};
export default connect(mapStateToProps)(SongDetail);
