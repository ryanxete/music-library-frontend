import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {

const [library, setLibrary] = useState([{"artist": "Just Emma","name": "Passengers","album": "Scars In The Sky","genre": "House","release_date": "2016-03-09"
}])

  return (
    <div >
      <Navbar />
      <SearchBar />
      <MusicTable parentEntries={library}/>
    </div>
  );
}

export default App;
