import React, { useState } from 'react';

const ColorButton = () => {
    const [isRed, setIsRed] = useState('red');
    const [isBlue, setIsBlue] = useState('blue');

    const buttonColors = () => {
        setIsRed(isRed === 'red' ? 'blue' : 'red');
        setIsBlue(isBlue === 'blue' ? 'red' : 'blue');
    };

    return (
        <div>
            <div
                onClick={buttonColors}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: isRed,
                    cursor: 'pointer',
                    marginTop: '20px',
                }}
            />
            <div
                onClick={buttonColors}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: isBlue,
                    cursor: 'pointer',
                    marginTop: '20px',
                }}
            />
        </div>
    );
};

export default ColorButton;
