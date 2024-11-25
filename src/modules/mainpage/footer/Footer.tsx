import React from 'react';
import './Footer.css';


const link_to_github: string = "https://github.com/kisen123";

const Footer: React.FC = () => {

    return (
        <div className="footer-div">
            <span className="made-by">
                Kristian Mølbach Lian
            </span>
            <a href={link_to_github} className="link-to-github">
                {link_to_github}
            </a>
        </div>
    )
}

export default Footer;