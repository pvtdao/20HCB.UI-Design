import React from 'react';


function Loader(props) {
    return (
        <div className='loader'>
            <div className='lds-ring'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;