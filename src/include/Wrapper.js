import React from 'react';

function Wrapper({children}) {
    return (
        <div id="wrap">
            {children}
        </div>
    );
}

export default Wrapper;
