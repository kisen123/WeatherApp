import React from 'react';
import './Footer.css';


const link_to_github: string = "https://github.com/kisen123";

const Footer: React.FC = () => {

    return (
        <div className="footer-div">
            <p className="made-by">
                Kristian Mølbach Lian
            </p>
            <a href={link_to_github} className="link-to-github">
                {link_to_github}
            </a>
        </div>
    )
}

export default Footer;