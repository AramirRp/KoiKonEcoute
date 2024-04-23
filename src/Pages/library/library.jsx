import React, { useEffect, useState } from 'react'
import APIKit from "../../utils/spotify";
import { IconContext } from "react-icons"
import {AiFillPlayCircle} from 'react-icons/ai'
import {useNavigate} from "react-router-dom"


import "./style.scss";

export const Library = () => {


  const [playlists, setPLaylists] = useState(null);

useEffect(() => {
  APIKit.get("me/playlists").then(function (response) {
    setPLaylists(response.data.items);
    console.log(response.data.items);
    console.log(playlists)
  });
}, []);

  const navigate = useNavigate("");

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });

  }


  return (
    <div className="screen-container">
      <div className="library-body">
      {playlists?.map((playlist) => (
        
        <div className="playlist-card" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
          <img src={playlist.images[0].url} className='playlist-image' alt='Playlist-art' />
          <p className="playlist-title">{playlist.name}</p>
          <p className='playlist-subtitle'>{playlist.tracks.total} morceaux</p>
          <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
          </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Library