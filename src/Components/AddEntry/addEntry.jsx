import React, { useState } from 'react';
import './addEntry.css'
import axios from 'axios';

const AddEntry = (props) => {

    const [name, setName] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [release_date, setRelease_Date] = useState()

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            Name: name,
            Artist: artist,
            Album: album,
            Genre: genre,
            Release_Date: release_date
        }
        props.addNew(newEntry)
    }

    // const create = async () => {
    //     let respose = await axios.post("http://127.0.0.1:8000/api/music_library/")
    //     setLibrary(respose.data);
    // };

    return ( 
        <div className='entry-box'>
            <form onSubmit={handleSubmit} className='form-grid'>
                    <label className='input'>
                        <h5>  Name:</h5><input type="text" name="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                    </label>
                    <label className='input'>
                            <h5>  Artist:</h5><input type="text" name="Post" value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    </label>
                    <label className='input'>
                            <h5>  Album:</h5><input type="text" name="Post" value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    </label>
                    <label className='input'>
                            <h5>  Genre:</h5><input type="text" name="Post" value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    </label><br />
                    <label className='input'>
                            <h5>  Release_Date:</h5><input type="date" name="Post" value={release_date} onChange={(event) => setRelease_Date(event.target.value)}/>
                    </label><br />
                    <input onClick={handleSubmit} type="submit" value="Create" className='button' />
            </form>
        </div>
     );
}
 
export default AddEntry;