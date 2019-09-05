import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'green', 'blue', 'orange', 'purple', 'brown', 'deep-orange '];
    const bgColorName = colours[Math.floor(Math.random() * 6)];

    return (props) => {
        return(
            <div>
                <WrappedComponent bgColorName={bgColorName} {...props} />
            </div>
        )
    };
}

export default Rainbow;