import React, { useState } from 'react';
import uuid from 'uuid/v1';

const Songlist = () => {
  const [songs, setSongs] = useState([
    { title: "Devil Trigger", id: 1 },
    { title: "Secret", id: 2 },
    { title: "Inferno", id: 3 }
  ]);

  const addSong = () => {
    setSongs([...songs, { title: "new song", id: uuid() }]);
  }
  return (
    <div className="song-list">
      <ul>
        {/* <li>The Edge of Dawn</li>
      <li>Calling for Rain</li>
      <li>Kakusei</li> */}
        {songs.map(song => {
          return (<li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
}


export default Songlist;