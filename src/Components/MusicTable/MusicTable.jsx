import React, { useState } from 'react';
import './MusicTable.css';
import axios from 'axios'



const MusicTable = (props) => {

    // const [song, setSong] = useState()

    const delete_song = async () => {
        await axios.delete("http://127.0.0.1:8000/api/music_library/")
    }

    return ( 
        <div className='posting'>
            <div className='data'>
                {props.parentEntries.map((entry, index)=>{
                return (
                    <div key={index} className='entered'>
                        <h1 className='name'><strong>{entry.name}</strong></h1>
                        <h4 className='artist'>{entry.artist}</h4>
                        <h5 className='rest'>Album: {entry.album}</h5>
                        <h5 className='rest'>Genre: {entry.genre}</h5>
                        <h5 className='rest'>Release Date: {entry.release_date}</h5>
                        <button onClick={delete_song}>Delete</button>
                    </div>
                );
                })}
            </div>s
        </div> 
     );
}
 
export default MusicTable;