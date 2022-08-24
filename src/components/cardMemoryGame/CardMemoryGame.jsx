import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import '../../styles.css';


export const CardMemoryGame = () => {
    const [flip, setFlip] = useState(false);
    
    return (
        <ReactCardFlip isFlipped={flip} 
        flipDirection="vertical">
            <div className='card' onClick={() => setFlip(!flip)}>
                
            </div>
            <div onClick={() => setFlip(!flip)}>
                <img 
                    className='card' 
                    src='https://i.pinimg.com/originals/c4/db/d0/c4dbd0edfc001aabb1fcad74045be62c.jpg' 
                    alt='prueba'
                    
                />
            </div>
        </ReactCardFlip>
    );
}