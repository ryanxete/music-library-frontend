import React, { useState } from 'react';


const MusicTable = (props) => {
    return ( 
        <div className='posting'>
            <div className='data'>
                {props.parentEntries.map((entry, index)=>{
                return (
                    <div key={index} className='entered'>
                        <h3 className='name'>{entry.name}</h3>
                        <h4 className='artist'>{entry.artist}</h4>
                        <h5 className='rest'>{entry.album}</h5>
                        <h5 className='rest'>{entry.genre}</h5>
                        <h5 className='rest'>{entry.release_date}</h5>
                    </div>
                );
                })}
            </div>
        </div> 
     );
}
 
export default MusicTable;