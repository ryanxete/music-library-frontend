import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddEntry from './Components/AddEntry/addEntry';
import axios from 'axios';
import './App.css'

function App() {

const [library, setLibrary] = useState([{"artist": "Just Emma","name": "Passengers","album": "Scars In The Sky","genre": "House","release_date": "2016-03-09"
}])

function addNew (entry) {
  let tempEntry = [entry, ...library]
  setLibrary(tempEntry)
}

useEffect(()=> {
  fetchSongs();
}, [])

const fetchSongs = async () => {
    let respose = await axios.get("http://127.0.0.1:8000/api/music_library/")
    setLibrary(respose.data);
    console.log("Songs: ", respose.data)

};

  return (
    <div >
      <Navbar />
      <AddEntry addNew={addNew} />
      <SearchBar />
      <button onClick={fetchSongs} className='all_button'>All Songs</button>
      <MusicTable parentEntries={library}/>
    </div>
  );
}

export default App;
