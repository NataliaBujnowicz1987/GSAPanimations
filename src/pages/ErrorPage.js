import React from 'react';

const ErrorPageStyle = {
    backgroundColor: 'rgba(4, 48, 4, 0.9)',
    color: '#fff',
    letterSpacing: '2.5px',
    fontWeight: 100,
    width: '100%',
    height: '95vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};


const ErrorPage = () => {
    return (
        <div style={ErrorPageStyle}>
            <p>Sorry, this page doesn't exist</p>
        </div>
    )
};

export default ErrorPage;