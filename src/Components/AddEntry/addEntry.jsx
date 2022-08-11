import React, { useState } from 'react';
import './addEntry.css'
import axios from 'axios';

const AddEntry = (props) => {

    const [name, setName] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [release_date, setRelease_Date] = useState()

    async function handleSubmit(event){
        event.preventDefault();
        let addNew = {
            name: name,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date
        }
        props.addNew(addNew)
    await axios.post("http://127.0.0.1:8000/api/music_library/", addNew)       
};

    return ( 
        <div className='entry-box'>
            <form onSubmit={handleSubmit} className='form-grid'>
                    <label className='input'>
                        <h5>  Name:</h5><input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                    </label>
                    <label className='input'>
                            <h5>  Artist:</h5><input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    </label>
                    <label className='input'>
                            <h5>  Album:</h5><input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    </label>
                    <label className='input'>
                            <h5>  Genre:</h5><input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    </label>
                    <label className='input'>
                            <h5>  Release_Date:</h5><input type="date" value={release_date} onChange={(event) => setRelease_Date(event.target.value)}/>
                    </label>
                    <input type="submit" value={'Add'} className='button' />
            </form>
        </div>
     );
}
 
export default AddEntry;