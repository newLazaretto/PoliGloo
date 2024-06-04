// src/components/Footer.js
import React from 'react';
import '../assets/styles/Footer.css';
import Instagram from '../assets/images/instagram.png';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados à Monalisa <a href="https://tinyurl.com/3jp7n8ax">
                <img className = "insta" src={Instagram} alt="Instagram" />
            </a>
            </p>
        </footer>
    );
};

export default Footer;
