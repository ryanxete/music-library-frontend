import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {

const [library, setLibrary] = useState([])

  return (
    <div >
      <Navbar />
      <SearchBar />
      <MusicTable />
    </div>
  );
}

export default App;
