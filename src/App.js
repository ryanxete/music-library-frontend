import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import axios from 'axios';

function App() {

const [library, setLibrary] = useState([{"artist": "Just Emma","name": "Passengers","album": "Scars In The Sky","genre": "House","release_date": "2016-03-09"
}])

useEffect(()=> {
  fetchSongs();
}, [])

const fetchSongs = async () => {
  try {
    let respose = await axios.get("http://127.0.0.1:8000/api/music_library")
    setLibrary(respose.data);
    console.log("Songs: ", respose.data)
  } catch (error) {
    console.log("error in fetchSongs: ", error.respose.data);
  }
};

  return (
    <div >
      <Navbar />
      <SearchBar />
      <MusicTable parentEntries={library}/>
    </div>
  );
}

export default App;
