import React from 'react';

const Card = () => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robo-pic' src='https://robohash.org/test?200x200 ' />
            <div>
                <h2>Jane Doe</h2>
                <p>janedoe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;