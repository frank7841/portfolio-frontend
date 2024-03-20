import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href=''>
        <BsTwitter />
      </a>
      
    </div>
    <div>
      <a href=''>
      <FaLinkedin />
      </a>
      
    </div>
    <div>
      <a href=''>
      <FaGithub />
      </a>
      
    </div>
  </div>
);

export default SocialMedia;
