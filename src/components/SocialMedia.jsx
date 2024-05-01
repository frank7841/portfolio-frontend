import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/_frank_dev" aria-label="Twitter">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://linkedin.com/in/frankline-wakasiaka" aria-label="LinkeIn">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/frank7841" aria-label="Github">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
