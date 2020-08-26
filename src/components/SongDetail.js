import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song</div>;
  }
  return (
    <div className="ui segment">
      <h3 className="header">Details for:</h3>
      <p className="header">Title: {selectedSong.title}</p>
      <p className="header">Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
