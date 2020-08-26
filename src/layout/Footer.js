import React from 'react';

const footerStyle = {
    backgroundColor: 'rgba(4, 48, 4, 0.9)',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: '2.5px',
    fontSize: '0.7rem',
    padding: '10px',
    fontWeight: 100,
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            Created by Natalia Bujnowicz
        </footer>
    )
};

export default Footer;